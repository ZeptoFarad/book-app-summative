import mongoose from "mongoose";

const security = new mongoose.Schema({
  password: String,
  username: String,
  userid: String,
  islogged: Boolean
});

const usersecurity = mongoose.model("usersecurity", security);
export default usersecurity;
