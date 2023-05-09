import express from "express";

import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

// Mongoose schema imports
import BookPost from "./models/bookpost.js";
import CreateUser from "./models/createuser.js";
import UserSecurity from "./models/usersecurity.js";
import CreateComment from "./models/comments.js";

let app = express();
const port = 3000;
app.use(
  cors({
    origin: "*",
    methods: ["GET", "HEAD", "PUT", "POST", "PATCH", "DELETE"]
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(
  `mongodb+srv://*****:********@cluster0.m3o8ybb.mongodb.net/?retryWrites=true&w=majority`
);

// Book Functions
// Add New Book To Database
app.post("/addbook", async (req, res) => {
  const { body } = await req;
  const addbook = await BookPost.create(body);
  await res.send(console.log("Received new id Added: " + addbook._id)); // Returns new id as a response
});
// Update a book by Id
app.post("/editbook", async (req, res) => {
  const { body } = await req;
  let id = body._id;
  let editbook = await BookPost.updateOne({ _id: id }, body);
  await res.send(editbook);
});
// Get Book Data
//# Note: response is updside down
app.get("/getbookdata", async (req, res) => {
  let books = await BookPost.find({}); // Put filters in these brackets to filter result
  console.log("Request Received");
  await res.send(books);
});

// //GET single book using ID
// app.get("/getbookdata/:id", async(req, res) => {
//   const get_single_book = await BookPost.findById({ _id : req.params.id});
//   res.json(get_single_book)
// });

app.get("/getsinglebook/:id", async (req, res) => {
  const { body } = req;
  let book = req.params.id;
  console.log(book);
  console.log("Book Received" + book);
  let mybook = await BookPost.findOne({ _id: book });

  res.json(mybook);
});

//Get category function
app.get("/getbycategory/:id", async (req, res) => {
  const { body } = req;
  let category = req.params.id;
  console.log(category);
  let category_books = await BookPost.find({ category: category });
  res.json(category_books);
});

app.get("/myListings/:userid", async (req, res) => {
  const userId = req.params.userid;

  let mylistings = await BookPost.find({ ownerId: userId });
  res.json(mylistings);
});

// test IDs: 6435e1d7944caceac918b2c1   ,    64360f1a00033def9b57b59e

// Delete Book By Id
app.post("/deletebook", async (req, res) => {
  const { body } = req;
  console.log(body._id);
  let todelete = await BookPost.deleteOne({ _id: body._id });
  res.send("Complete");
});

// Add Comment
app.post("/addcomment", async (req, res) => {
  const { body } = await req;
  const newcomment = await CreateComment.create(body);
  res.send("New comment has been added: " + newcomment._id);
});
//Update/Edit Comment
//Delete Comment
//Reply To Comment

// User Functions
//Signup user
app.post("/signup", async (req, res) => {
  //Check if user email exists
  const { body } = await req;
  console.log(body);

  let useremail = toString(body.user.email);
  const checker = await CreateUser.find({ email: useremail }); // When adding email create code to make it toLowercase()
  console.log(checker);
  if (checker.length > 0) res.send(JSON.stringify({ Reply: "Failed" }));
  else {
    const { body } = await req;
    const newUser = await CreateUser.create(body.user);
    //Create SecurityDB document
    const createsecurity = await UserSecurity.create({
      password: body.security.password,
      username: body.security.username,
      userid: newUser._id,
      islogged: true,
    });
    console.log(newUser._id);
    await res.send({ Reply: "Success",id: newUser._id });
    // await res.send({ Reply: "Success" });
  }
});

//Check and Login User
app.get("/loginuser", async (req, res) => {
  const { body } = await req;
  let password = await body.login_password;
  let username = await body.login_name;
  console.log(password + "  " + username);

  //Check Database for Credentials
  const userinfo = await UserSecurity.findOne({
    password: password,
    username: username
  });

  const confirm = UserSecurity.updateOne(
    { userid: userinfo.userid },
    { islogged: true }
  );

  res.send((await confirm).acknowledged);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
