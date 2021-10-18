import { Schema, model } from 'mongoose'
import { IUser } from '../types/documents/user.document'

const UserSchema = new Schema({
  Name: {
    type: String,
  },
  Cell: {
    type: String,
  },
  Address: {
    type: String,
  },
  Email: {
    type: String,
  },
  Password: {
    type: String,
  },
  Books: {
    type: [
      {
        Book: {
          type: Schema.Types.ObjectId,
          ref: 'Book',
        },
        IssueDate: {
          type: Date,
          default: new Date().toString(),
        },
        ReturnDate: Date,
        TotalBill: Number,
      },
    ],
  },
})

export const UserModel = model<IUser>('User', UserSchema)
