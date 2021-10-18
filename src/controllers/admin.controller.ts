import { Body, Get, Post, Route, Tags } from '@tsoa/runtime'
import { AdminRepository } from '../repositories/admin.repository'
import {
  AdminLoginRequest,
  AdminSaveRequest,
} from '../types/requests/admin.request'
import {
  AdminLoginResponse,
  AdminSaveResponse,
} from '../types/responses/admin.response'
import jwt from 'jsonwebtoken'
import { serverSecret } from '../constants/server.constants'

@Route('admin')
@Tags('Admin')
export class AdminController {
  constructor() {}

  /**
   *Here we can save the new book to the record
   *
   *
   */
  @Post('saveAdmin')
  async saveAdmin(@Body() admin: AdminSaveRequest): Promise<AdminSaveResponse> {
    const newAdmin: AdminSaveResponse = await (<any>(
      new AdminRepository().saveAdmin(admin)
    ))
    if (!newAdmin) {
      throw new Error('Admin not saved')
    }
    return <AdminSaveResponse>newAdmin
  }
  @Post('login')
  async login(@Body() admin: AdminLoginRequest): Promise<AdminLoginResponse> {
    const loggedAdmin: AdminSaveResponse[] = <any>(
      await new AdminRepository().getAdmin(admin)
    )
    if (loggedAdmin) {
      console.log('inside if')
      const token = jwt.sign({ _id: loggedAdmin[0]._id }, serverSecret)
      console.log(token)
      return {
        token: token,
      }
    } else {
      return {
        token: 'user Not found',
      }
    }
  }
}
