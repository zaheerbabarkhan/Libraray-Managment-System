import { AdminModel } from '../models/admin.model'
import {
  AdminLoginRequest,
  AdminSaveRequest,
} from '../types/requests/admin.request'

export class AdminRepository {
  constructor() {}

  saveAdmin(Admin: AdminSaveRequest) {
    return new AdminModel(Admin).save()
  }
  getAdmin(admin: AdminLoginRequest) {
    return AdminModel.find(admin)
  }
}
