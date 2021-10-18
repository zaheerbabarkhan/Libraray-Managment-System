import { Document } from 'mongoose'

export interface IBook extends Document {
  _id: string
  title: string
  Author: string
  Quantity: number
  Category: string
  Availability: true
  FairPerDay: number
}
