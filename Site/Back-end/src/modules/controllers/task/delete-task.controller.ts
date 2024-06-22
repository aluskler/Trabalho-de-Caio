import { Request, Response } from 'express'
import { z } from 'zod'
import deleteTaskService from '../../services/task/delete-task.service'

class DeleteTaskController {
  async handle(req: Request, res: Response) {
    const deleteTaskSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = deleteTaskSchema.parse(req.params)

    await deleteTaskService.execute({ id })

    return res.status(204).end()
  }
}

export default new DeleteTaskController()
