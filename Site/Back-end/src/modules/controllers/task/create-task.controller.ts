import { Request, Response } from 'express'
import { z } from 'zod'
import createTaskService from '../../services/task/create-task.service'

class CreateTaskController {
  async handle(req: Request, res: Response) {
    const createTaskSchema = z.object({
      title: z.string(),
      list_id: z.string().uuid(),
      description: z.string(),
    })

    const data = createTaskSchema.parse(req.body)

    await createTaskService.execute(data)

    return res.status(201).end()
  }
}

export default new CreateTaskController()
