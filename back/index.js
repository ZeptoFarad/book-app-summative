import express from "express";
import BookPost from "./models/bookpost";
let app = express()
const port = 3000
app.use(cors({ origin: '*',methods:['GET','HEAD','PUT','POST','PATCH','DELETE']}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


mongoose.connect(`mongodb+srv://PeekABookDB:sNIGWcBgyeX5MOo3@cluster0.m3o8ybb.mongodb.net/?retryWrites=true&w=majority`)
const AddBook = await BookPost.create({FetchBody});

app.post("/addbook", (req, res) => {
    const FetchBody = req;
    console.log(req)
})


app.listen(port, () => {
    console.log(`Listnening on port ${port}`);
});

