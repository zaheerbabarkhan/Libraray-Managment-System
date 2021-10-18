import express from 'express'
import { BookController } from '../controllers/book.controller'

export class BookRouter {
  router: express.Router
  constructor() {
    this.router = express.Router()
    this.routes()
  }
  routes() {
    /**
     *save the new book to the record
     *
     */
    this.router.post('/saveBook', async (req, res, next) => {
      try {
        const book = req.body
        const newBook = await new BookController().saveBook(book)
        res.status(201)
        res.json({
          newBook,
        })
      } catch (error) {
        next(error)
      }
    })

    /**
     *update existing book in the record
     */
    this.router.put('/updateBook', async (req, res, next) => {
      try {
        const book = req.body
        const updatedBook = await new BookController().updateBook(book)
        res.status(200)
        res.json({
          updatedBook,
        })
      } catch (error) {
        next(error)
      }
    })

    /**
     *retrieving a book on the base of objectID from the record
     *
     */
    this.router.post('/getBook', async (req, res, next) => {
      try {
        const bookId = req.body
        const book = await new BookController().getBook(bookId)
        res.status(200)
        res.json({
          book,
        })
      } catch (error) {
        next(error)
      }
    })

    /**
     *Get List of All the books from the record
     *
     */
    this.router.get('/getBookList', async (req, res, next) => {
      try {
        const books = await new BookController().getBookList()
        res.status(200)
        res.json({
          books,
        })
      } catch (error) {
        next(error)
      }
    })
  }
}

export const BookAPI = new BookRouter().router
