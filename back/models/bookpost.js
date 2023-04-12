import mongoose from "mongoose";

const bookpost = new mongoose.Schema({
  postTitle: String,
  author: String,
  price: Number,
  category: String,
  yearPub: { type: mongoose.Types.Decimal128 },
  condition: String,
  searchTags: Array,
  listedDate: { type: Date, default: Date.now },
  expiryDate: Date,
  bookSold: Boolean,
  soldTo: String,
  ownerId: String,
  description: String,
  coverstyle: { soft: { type: Boolean } },
  notable: {
    firstEdition: { type: Boolean },
    limitedEdition: { type: Boolean },
    signedEdition: { type: Boolean }
  },
  language: String,
  shipping: {
    payment: {
      cash: { type: Boolean },
      bank: { type: Boolean },
      credit: { type: Boolean }
    },
    delivery: {
      option1: {
        method: { type: String },
        cost: { type: Number }
      },
      option2: {
        method: { type: String },
        cost: { type: Number }
      },
      option3: {
        method: { type: String },
        cost: { type: Number }
      }
    },
    contactMethod: {
      email: { type: Boolean },
      phone: { type: Boolean },
      message: { type: Boolean }
    }
  }
});

const BookPost = mongoose.model("BookPost", bookpost);
export default BookPost;
