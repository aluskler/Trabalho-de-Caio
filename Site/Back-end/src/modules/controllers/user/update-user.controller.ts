import { Request, Response } from 'express'
import { z } from 'zod'
import updateUserService from '../../services/user/update-user.service'

class UpdateUserController {
  async handle(req: Request, res: Response) {
    const getUserSchema = z.object({
      id: z.string().uuid(),
    })

    const updateUserSchema = z.object({
      name: z.string().min(5).optional(),
      email: z.string().email().optional(),
      password: z.string().min(8).optional(),
      birthday: z
        .string()
        .transform((value) => new Date(value))
        .optional(),
    })

    const { id } = getUserSchema.parse(req.params)
    const { name, email, password, birthday } = updateUserSchema.parse(req.body)

    const data = {
      name,
      email,
      password,
      birthday,
    }

    await updateUserService.execute({ id, data })

    return res.status(204).end()
  }
}

export default new UpdateUserController()
