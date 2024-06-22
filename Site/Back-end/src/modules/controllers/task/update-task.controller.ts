import { Request, Response } from 'express'
import { z } from 'zod'
import updateTaskService from '../../services/task/update-task.service'

class UpdateTaskController {
  async handle(req: Request, res: Response) {
    const getTaskSchema = z.object({
      id: z.string().uuid(),
    })

    const updateTaskSchema = z.object({
      title: z.string().optional(),
      description: z.string().optional(),
    })

    const { id } = getTaskSchema.parse(req.params)

    const data = updateTaskSchema.parse(req.body)

    await updateTaskService.execute({ id, data })

    return res.status(204).end()
  }
}

export default new UpdateTaskController()
