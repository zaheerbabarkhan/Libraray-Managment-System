export interface UserSaveRequest {
  Name: string
  Cell: string
  Address: string
  Email: string
  Password: string
}
export interface UserUpdateRequest {
  _id: string
  Name: string
  Cell: string
  Address: string
  Email: string
  Password: string
}

export interface UserBookIssueRequest {
  UserId: string
  BookId: string
}
export interface UserBookReturnRequest {
  Book: string
  ReturnDate: Date
}

export interface GetIssuedBookRequest {
  _id: string
}
export interface GetBookBillRequest {
  _id: string
}
