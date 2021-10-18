import { connect, connection } from 'mongoose'
import {
  dbHost,
  dbName,
  dbPassword,
  dbUser,
} from '../constants/server.constants'

export class MongoDb {
  constructor() {}

  async connect(): Promise<boolean> {
    let dbStatus: boolean = false

    await connect(`mongodb://localhost/Library`)
      .then(function () {
        console.log('Database Connection Established')
        dbStatus = true
      })
      .catch((error) => {
        console.log(error)
        console.log('Error Establishing Connection')
        dbStatus = false
      })

    return dbStatus
  }
}
