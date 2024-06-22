import express from 'express'
import cors from 'cors'

import 'express-async-errors'

import { errorHandle } from './middlewares/error-handling'
import { userRouter } from './routes/user-routes'
import { listRouter } from './routes/list-routes'
import { taskRouter } from './routes/task-routes'
import { authRouter } from './routes/auth-routes'

const server = express()

server.use(express.json())
server.use(cors())

server.use('/api', [userRouter, listRouter, taskRouter, authRouter])

server.use(errorHandle)

server.listen(3333, () => {
  console.log('Started server!🚀')
})
