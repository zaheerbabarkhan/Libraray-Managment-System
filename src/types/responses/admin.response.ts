export interface AdminSaveResponse {
  _id: string
  UserName: string
  Password: string
}

export interface AdminLoginResponse {
  token: string
}
