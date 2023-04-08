import express from "express";
import BookPost from "./models/bookpost.js";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

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

app.post("/addbook", async (req, res) => {
  const { body } = await req;

  const addbook = await BookPost.create(body);
  await res.send(console.log("Received new id Added: " + addbook._id));
});

app.listen(port, () => {
  console.log(`Listnening on port ${port}`);
});
