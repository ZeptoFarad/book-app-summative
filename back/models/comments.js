import mongoose from "mongoose";

const user = new mongoose.Schema({
  ownerid: String,
  bookpostid: String,
  content: String,
  likes: Number,
  posttime: {
    type: Date,
    default: Date.now
  }
});

const CreateUser = mongoose.model("CreateUser", user);
export default CreateUser;
