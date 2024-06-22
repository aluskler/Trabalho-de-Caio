import { Request, Response } from 'express'
import { z } from 'zod'
import deleteUserService from '../../services/user/delete-user.service'

class DeleteUserController {
  async handle(req: Request, res: Response) {
    const deleteUserSchema = z.object({
      id: z.string().uuid(),
    })

    const data = deleteUserSchema.parse(req.params)

    await deleteUserService.execute(data)

    return res.status(204).end()
  }
}

export default new DeleteUserController()
