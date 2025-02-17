'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

// Conectar ao MongoDB
mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true });

// Definir o modelo do Livro
const bookSchema = new Schema({
  title: { type: String, required: true },
  comments: [String]
});
const Book = mongoose.model('Book', bookSchema);

module.exports = function (app) {

  app.route('/api/books')
    .get(async function (req, res) {
      try {
        const books = await Book.find({}, '_id title comments');
        const response = books.map(book => ({
          _id: book._id,
          title: book.title,
          commentcount: book.comments.length
        }));
        res.json(response);
      } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    })
    .post(async function (req, res) {
      const { title } = req.body;
      if (!title) {
        return res.send('missing required field title');
      }
      try {
        const newBook = new Book({ title, comments: [] });
        await newBook.save();
        res.json({ _id: newBook._id, title: newBook.title });
      } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    })
    .delete(async function (req, res) {
      try {
        await Book.deleteMany({});
        res.send('complete delete successful');
      } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });

  app.route('/api/books/:id')
    .get(async function (req, res) {
      try {
        const book = await Book.findById(req.params.id);
        if (!book) {
          return res.send('no book exists');
        }
        res.json({ _id: book._id, title: book.title, comments: book.comments });
      } catch (err) {
        res.send('no book exists');
      }
    })
    .post(async function (req, res) {
      const { comment } = req.body;
      if (!comment) {
        return res.send('missing required field comment');
      }
      try {
        const book = await Book.findById(req.params.id);
        if (!book) {
          return res.send('no book exists');
        }
        book.comments.push(comment);
        await book.save();
        res.json({ _id: book._id, title: book.title, comments: book.comments });
      } catch (err) {
        res.send('no book exists');
      }
    })
    .delete(async function (req, res) {
      try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) {
          return res.send('no book exists');
        }
        res.send('delete successful');
      } catch (err) {
        res.send('no book exists');
      }
    });
};
