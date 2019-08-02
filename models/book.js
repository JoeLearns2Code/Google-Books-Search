//This is our MongoDB schema, defining keys and the types of values they will contain.

//Using mongoose npm package to dynamically create a Mongo database
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  authors: { type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  googleId: { type: String, required: true, unique: true }
});

const Book = mongoose.model("Book", bookSchema);

//This is exported and imported by index.js, which will be used to import all model files(if there were more).
module.exports = Book;
