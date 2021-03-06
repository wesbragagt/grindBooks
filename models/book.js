const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  authors: { type: String, required: true },
  description: { type: String, required: true },
  image: String,
  link: String,
  title: String,
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
