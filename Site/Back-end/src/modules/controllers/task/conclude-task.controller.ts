import { Request, Response } from 'express'
import { z } from 'zod'
import concludeTaskService from '../../services/task/conclude-task.service'

class ConcludeTaskController {
  async handle(req: Request, res: Response) {
    const concludeSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = concludeSchema.parse(req.params)

    await concludeTaskService.execute({ id })

    return res.status(204).end()
  }
}

export default new ConcludeTaskController()
