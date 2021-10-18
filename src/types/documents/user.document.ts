import { Document } from 'mongoose'
import { IIssuedBook } from './issuedBook.document'

export interface IUser extends Document {
  _id: string
  Name: string
  Cell: string
  Address: string
  Email: string
  Password: string
  Books: IIssuedBook[]
}
