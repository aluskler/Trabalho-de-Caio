import { Request, Response } from 'express'
import { z } from 'zod'
import uncloseTaskService from '../../services/task/unclose-task.service'

class UncloseTaskController {
  async handle(req: Request, res: Response) {
    const concludeSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = concludeSchema.parse(req.params)

    await uncloseTaskService.execute({ id })

    return res.status(204).end()
  }
}

export default new UncloseTaskController()
