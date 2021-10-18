import express from 'express'
import { UserController } from '../controllers/user.controller'
import { UserSaveUpdateResponse } from '../types/responses/user.response'
import ErrorHandler from '../utils/error'

class UserRouter {
  router: express.Router
  constructor() {
    this.router = express.Router()
    this.routes()
  }
  routes() {
    this.router.post('/saveUser', async (req, res, next) => {
      try {
        const user = req.body
        const newUser: {
          _id: string
          Name: string
          Email: string
          Password: string
          Cell: string
        } = await new UserController().saveUser(user)
        console.log(newUser)
        return res.json({
          user: {
            _id: newUser._id,
            Name: newUser.Name,
            Email: newUser.Email,
            Password: newUser.Password,
            Cell: newUser.Cell,
          },
          //   user: newUser,
        })
      } catch (error) {
        next(error)
      }
    })
    this.router.put('/updateUser', async (req, res, next) => {
      const user = req.body
      const updatedUser = await new UserController().updateUser(user)
      if (!updatedUser) {
        throw new ErrorHandler(400, 'User not updated')
      }
      return updatedUser
    })
    this.router.put('/issueBook', async (req, res, next) => {
      const issueBook = req.body
      const newBook = await new UserController().issueBook(issueBook)
      res.json(newBook)
    })
  }
}

export const UserAPI = new UserRouter().router
