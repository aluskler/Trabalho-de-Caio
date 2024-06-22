import { Router } from 'express'

import getAllListController from '../modules/controllers/list/get-all-list.controller'
import createListController from '../modules/controllers/list/create-list.controller'
import detailsListController from '../modules/controllers/list/details-list.controller'
import updateListController from '../modules/controllers/list/update-list.controller'
import deleteListController from '../modules/controllers/list/delete-list.controller'
import { isAuthenticated } from '../middlewares/is-authenticated'

export const listRouter = Router()

listRouter.post('/lists/register', isAuthenticated, createListController.handle)
listRouter.get('/lists', isAuthenticated, getAllListController.handle)
listRouter.get('/lists/:id', isAuthenticated, detailsListController.handle)
listRouter.put('/lists/:id', isAuthenticated, updateListController.handle)
listRouter.delete('/lists/:id', isAuthenticated, deleteListController.handle)
