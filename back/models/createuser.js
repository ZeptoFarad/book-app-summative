import mongoose from "mongoose";

const user = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  likedbooks: Array,
  profileimage: String,
  userbasket: Array,
  purchasedbooks: [
    {
      bookid: String,
      shippingoption: String,
      shippingprice: Number,
      phonenumber: String,
      email: String,
      card: String,
      expiry: String,
      cvv: String
    }
  ]
});

const CreateUser = mongoose.model("CreateUser", user);
export default CreateUser;
