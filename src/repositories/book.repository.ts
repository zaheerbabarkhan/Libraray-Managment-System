import { BookModel } from '../models/book.model'
import {
  BookSaveRequest,
  BookUpdateRequest,
} from '../types/requests/book.request'

export class BookRepository {
  saveBook(Book: BookSaveRequest) {
    return new BookModel(Book).save()
  }
  updateBook(Book: BookUpdateRequest) {
    return BookModel.findByIdAndUpdate(Book._id, Book, {
      new: true,
    })
  }
  getBook(id: string) {
    return BookModel.findById(id)
  }
  getBookList() {
    return BookModel.find()
  }
}
