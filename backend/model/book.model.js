import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
        name: String,
        title:String,
        price:Number,
        category: String,
        image:String
})
const Book = mongoose.model("Ebook",bookSchema)
export default Book