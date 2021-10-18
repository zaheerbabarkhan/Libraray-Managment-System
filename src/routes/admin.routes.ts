import express from 'express'
import { AdminController } from '../controllers/admin.controller'

export class AdminRouter {
  router: express.Router
  constructor() {
    this.router = express.Router()
    this.routes()
  }
  routes() {
    this.router.post('/saveAdmin', async (req, res, next) => {
      try {
        const saveReq = req.body
        const newAdmin = await new AdminController().saveAdmin(saveReq)
        res.json(newAdmin)
      } catch (error) {
        next(error)
      }
    })

    this.router.post('/login', async (req, res, next) => {
      try {
        const loginReq = req.body
        const token = await new AdminController().login(loginReq)
        res.json(token)
      } catch (error) {
        next(error)
      }
    })
  }
}

export const AdminAPI = new AdminRouter().router
