import { Request, Response } from 'express'
import detailsUserService from '../../services/user/details-user.service'

class DetailsUserController {
  async handle(req: Request, res: Response) {
    const id = req.id

    const user = await detailsUserService.execute({ id })

    return res.status(200).json(user)
  }
}

export default new DetailsUserController()
