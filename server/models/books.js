var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
      id: Number,
      userId: Number,
      title: String,
      body: String
  });
var Book = mongoose.model('Book', bookSchema);

module.exports = Book;
