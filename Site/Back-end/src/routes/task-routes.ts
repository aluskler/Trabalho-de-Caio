import { Router } from 'express'
import createTaskController from '../modules/controllers/task/create-task.controller'
import detailsTaskController from '../modules/controllers/task/details-task.controller'
import updateTaskController from '../modules/controllers/task/update-task.controller'
import deleteTaskController from '../modules/controllers/task/delete-task.controller'
import { isAuthenticated } from '../middlewares/is-authenticated'
import concludeTaskController from '../modules/controllers/task/conclude-task.controller'
import unCloseTaskController from '../modules/controllers/task/unclose-task.controller'

export const taskRouter = Router()

taskRouter.post('/tasks/register', isAuthenticated, createTaskController.handle)
taskRouter.get('/tasks/:id', isAuthenticated, detailsTaskController.handle)
taskRouter.put('/tasks/:id', isAuthenticated, updateTaskController.handle)
taskRouter.put(
  '/tasks/:id/conclude',
  isAuthenticated,
  concludeTaskController.handle,
)
taskRouter.patch(
  '/tasks/:id/unClose',
  isAuthenticated,
  unCloseTaskController.handle,
)
taskRouter.delete('/tasks/:id', isAuthenticated, deleteTaskController.handle)
