import { Request, Response } from 'express'
import { z } from 'zod'
import deleteListService from '../../services/list/delete-list.service'

class DeleteListController {
  async handle(req: Request, res: Response) {
    const deleteListSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = deleteListSchema.parse(req.params)

    await deleteListService.execute({ id })

    return res.status(204).end()
  }
}

export default new DeleteListController()
