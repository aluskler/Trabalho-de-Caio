import { Request, Response } from 'express'
import fetchAllUserService from '../../services/user/fetch-all-user.service'

class FetchAllUserController {
  async handle(req: Request, res: Response) {
    const users = await fetchAllUserService.execute()

    return res.status(200).json(users)
  }
}

export default new FetchAllUserController()
