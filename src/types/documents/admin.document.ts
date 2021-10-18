import { Document } from 'mongoose'

export interface IAdmin extends Document {
  _id: string
  UserName: string
  Password: string
}
