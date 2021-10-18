export interface BookSaveRequest {
  title: string
  Author: string
  Quantity: number
  Category: string
  FairPerDay: number
}

export interface BookUpdateRequest {
  _id: string
  title: string
  Author: string
  Quantity: number
  Category: string
  Availability: true
  FairPerDay: number
}
export interface GetBookRequest {
  id: string
}
