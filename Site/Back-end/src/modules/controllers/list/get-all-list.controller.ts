import { Request, Response } from 'express'
import getAllListService from '../../services/list/get-all-list.service'

class GetAllListController {
  async handle(req: Request, res: Response) {
    const id = req.id
    const lists = await getAllListService.execute({ id })
    return res.status(200).json(lists)
  }
}

export default new GetAllListController()
