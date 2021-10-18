export interface UserSaveUpdateResponse {
  _id: string
  Name: string
  Cell: string
  Address: string
  Email: string
  Password: string
}

export interface UserBookIssueResponse {
  Book: string
  IssueDate: Date
}

export interface UserBookReturnResponse {
  Book: string
  IssueDate: Date
  ReturnDate: Date
  TotalBill: number
}

export interface GetIssuedBookResponse extends UserBookReturnResponse {}

export interface GetBookBillResponse extends UserBookReturnResponse {}
