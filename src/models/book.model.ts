import { Schema, model } from 'mongoose'
import { IBook } from '../types/documents/book.document'
const BookSchema = new Schema({
  title: String,
  Author: String,
  Quantity: Number,
  Category: String,
  Availability: Boolean,
  FairPerDay: Number,
})

export const BookModel = model<IBook>('Book', BookSchema)
