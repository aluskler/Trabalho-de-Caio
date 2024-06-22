import { Router } from 'express'
import authController from '../modules/controllers/auth/auth.controller'

export const authRouter = Router()

authRouter.post('/auth', authController.handle)
