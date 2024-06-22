import { Request, Response } from 'express'
import { z } from 'zod'
import detailsTaskService from '../../services/task/details-task.service'

class DetailsTaskController {
  async handle(req: Request, res: Response) {
    const detailsTaskSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = detailsTaskSchema.parse(req.params)

    const task = await detailsTaskService.execute({ id })

    return res.status(200).json(task)
  }
}

export default new DetailsTaskController()
