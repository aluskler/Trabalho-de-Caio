import { Request, Response } from 'express'
import { z } from 'zod'
import detailsListService from '../../services/list/details-list.service'

class DetailsListController {
  async handle(req: Request, res: Response) {
    const detailsListSchema = z.object({
      id: z.string().uuid(),
    })

    const data = detailsListSchema.parse(req.params)

    const list = await detailsListService.execute(data)

    return res.status(200).json(list)
  }
}

export default new DetailsListController()
