import { Router } from 'express'

import detailsUserController from '../modules/controllers/user/details-user.controller'
import createUserController from '../modules/controllers/user/create-user.controller'
import updateUserController from '../modules/controllers/user/update-user.controller'
import deleteUserController from '../modules/controllers/user/delete-user.controller'
import { isAuthenticated } from '../middlewares/is-authenticated'
import fetchAllUserController from '../modules/controllers/user/fetch-all-user.controller'

export const userRouter = Router()

userRouter.post('/users/register', createUserController.handle)
userRouter.get('/users/all', fetchAllUserController.handle)
userRouter.get('/users', isAuthenticated, detailsUserController.handle)
userRouter.put('/users/:id', isAuthenticated, updateUserController.handle)
userRouter.delete('/users/:id', isAuthenticated, deleteUserController.handle)
