import mongoose from "mongoose";

const comment = new mongoose.Schema({
  ownerid: String,
  bookpostid: String,
  content: String,
  likes: Number,
  posttime: {
    type: Date,
    default: Date.now
  }
});

const CreateComment = mongoose.model("CreateComment", comment);
export default CreateComment;
