import { Body, Post, Route, Tags } from '@tsoa/runtime'
import { Put } from 'tsoa'
import { BookRepository } from '../repositories/book.repository'
import { UserRepository } from '../repositories/user.repository'
import { IBook } from '../types/documents/book.document'
import {
  UserBookIssueRequest,
  UserSaveRequest,
  UserUpdateRequest,
} from '../types/requests/user.request'
import { UserSaveUpdateResponse } from '../types/responses/user.response'
import ErrorHandler from '../utils/error'

@Route('user')
@Tags('User')
export class UserController {
  /**
   * Save New User
   * <hr/>
   */
  @Post('/saveUser')
  async saveUser(
    @Body() User: UserSaveRequest
  ): Promise<UserSaveUpdateResponse> {
    const newUser: UserSaveUpdateResponse = await new UserRepository().saveUser(
      User
    )

    if (!newUser) {
      throw new ErrorHandler(400, 'User not Created')
    }
    return <UserSaveUpdateResponse>newUser
  }

  @Put('updateUser')
  async updateUser(
    @Body() User: UserUpdateRequest
  ): Promise<UserSaveUpdateResponse> {
    const updatedUser: UserSaveUpdateResponse =
      await new UserRepository().updateUser(User)
    if (!updatedUser) {
      throw new ErrorHandler(400, 'User Not Updated')
    }
    return updatedUser
  }

  @Put('issueBook')
  async issueBook(@Body() issueBook: UserBookIssueRequest): Promise<any> {
    //checking if book is available in stock
    const book: IBook = <any>(
      await new BookRepository().getBook(issueBook.BookId)
    )
    if (book.Quantity === 0) {
      return {
        message: 'Not Available in Stock',
      }
    }
    const newBook = await new UserRepository().issueBook(issueBook)
    return newBook.Books.slice(-1)
  }
}
