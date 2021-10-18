import { UserModel } from '../models/user.model'
import {
  UserBookIssueRequest,
  UserSaveRequest,
  UserUpdateRequest,
} from '../types/requests/user.request'

export class UserRepository {
  async saveUser(User: UserSaveRequest) {
    return await new UserModel(User).save()
  }
  updateUser(User: UserUpdateRequest) {
    return UserModel.findByIdAndUpdate(User._id, User, {
      new: true,
    })
  }
  issueBook(issueBook: UserBookIssueRequest) {
    return UserModel.findByIdAndUpdate(
      issueBook.UserId,
      {
        $push: {
          Books: {
            Book: issueBook.UserId,
            IssueDate: '1995-12-17T03:24:00',
            ReturnDate: '1995-12-17T03:24:00',
            TotalBill: 10,
          },
        },
      },
      {
        new: true,
        upsert: true,
      }
    ).select({ Books: 1, _id: 0 })
  }
}
