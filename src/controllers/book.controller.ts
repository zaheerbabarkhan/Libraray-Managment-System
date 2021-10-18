import { Body, Get, Post, Put, Route, Tags } from '@tsoa/runtime'
import { BookRepository } from '../repositories/book.repository'
import {
  BookSaveRequest,
  BookUpdateRequest,
  GetBookRequest,
} from '../types/requests/book.request'
import CustomError from '../utils/error'
import { BookSaveUpdateResponse } from '../types/responses/book.response'

@Route('book')
@Tags('Book')
export class BookController {
  /**
   *save the new book to the record
   *
   */
  @Post('saveBook')
  async saveBook(
    @Body() Book: BookSaveRequest
  ): Promise<BookSaveUpdateResponse> {
    const newBook: BookSaveUpdateResponse = <any>(
      new BookRepository().saveBook(Book)
    )
    if (!newBook) {
      throw new CustomError(400, 'Book not created')
    }
    return newBook
  }

  /**
   *update existing book in the record
   *
   */
  @Put('updateBook')
  async updateBook(
    @Body() Book: BookUpdateRequest
  ): Promise<BookSaveUpdateResponse> {
    const updatedBook: BookSaveUpdateResponse = await (<any>(
      new BookRepository().updateBook(Book)
    ))
    if (!updatedBook) {
      throw new CustomError(400, 'Book not updated')
    }
    return updatedBook
  }

  /**
   *retrieving a book on the base of objectID from the record
   *
   */
  @Post('getBook')
  async getBook(
    @Body() getBook: GetBookRequest
  ): Promise<BookSaveUpdateResponse> {
    const book: BookSaveUpdateResponse = <any>(
      await new BookRepository().getBook(getBook.id)
    )
    if (!book) {
      throw new CustomError(404, 'Book NOt Found')
    }
    return book
  }

  /**
   *Get List of All the books from the record
   *
   */
  @Get('getBookList')
  async getBookList(): Promise<BookSaveUpdateResponse[]> {
    const books: BookSaveUpdateResponse[] = <any>(
      await new BookRepository().getBookList()
    )
    if (!books) {
      return []
    }
    return books
  }
}
