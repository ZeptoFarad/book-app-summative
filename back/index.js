import express from "express";

import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

// Mongoose schema imports
import BookPost from "./models/bookpost.js";
import CreateUser from "./models/createuser.js";
import UserSecurity from "./models/usersecurity.js";

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
  `mongodb+srv://PeekABookDB:sNIGWcBgyeX5MOo3@cluster0.m3o8ybb.mongodb.net/?retryWrites=true&w=majority`
);

// Book Functions
// Add New Book To Database
app.post("/addbook", async (req, res) => {
  const { body } = await req;
  const addbook = await BookPost.create(body);
  await res.send(console.log("Received new id Added: " + addbook._id)); // Returns new id as a response
});
app.post("/editbook", async (req, res) => {
  const { body } = await req;
  let id = body._id;
  let editbook = await BookPost.updateOne({ _id: id }, body);
  await res.send(editbook);
});

//# Note: response is updside down
app.get("/getbookdata", async (req, res) => {
  let books = await BookPost.find({}); // Put filters in these brackets to filter result
  console.log("Request Received");
  await res.send(books);
});

// Add Comment
// app.post("/addcomment");

// User Functions
//Signup user
app.post("/signup", async (req, res) => {
  //Check if user email exists
  const { body } = await req;
  console.log(body.user.email);
  let useremail = toString(body.user.email);
  const checker = await CreateUser.find({ email: "bobbob@gmail.com" }); // When adding email create code to make it toLowercase()
  console.log(checker);

  if (checker.length > 0) res.send({ Error: "User Already Exists" });
  else {
    const { body } = await req;
    const newUser = await CreateUser.create(body.user);
    //Create SecurityDB document
    const createsecurity = await UserSecurity.create({
      password: body.security.password,
      username: body.security.username,
      userid: newUser._id,
      islogged: false
    });
    await res.send(newUser);
  }
});

//Check and Login User

app.listen(port, () => {
  console.log(`Listnening on port ${port}`);
});
