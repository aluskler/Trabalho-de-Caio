import { Request, Response } from 'express'
import { z } from 'zod'
import updateListService from '../../services/list/update-list.service'

class UpdateListController {
  async handle(req: Request, res: Response) {
    const getUpdateListSchema = z.object({
      id: z.string().uuid(),
    })

    const updateSchema = z.object({
      name: z.string().optional(),
    })

    const { id } = getUpdateListSchema.parse(req.params)
    const data = updateSchema.parse(req.body)

    await updateListService.execute({ id, data })

    return res.status(204).end()
  }
}

export default new UpdateListController()
