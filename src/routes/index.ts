import express from 'express'
import { AdminAPI } from './admin.routes'
import { BookAPI } from './book.routes'
import { UserAPI } from './user.route'

export class MainRouter {
  router: express.Router
  constructor() {
    this.router = express.Router()
    this.routes()
  }
  routes() {
    this.router.use('/admin', AdminAPI)
    this.router.use('/book', BookAPI)
    this.router.use('/user', UserAPI)
  }
}

export const MainAPI = new MainRouter().router
