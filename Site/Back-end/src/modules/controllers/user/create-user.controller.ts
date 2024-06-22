import { Request, Response } from 'express'

import { z } from 'zod'

import createUserService from '../../services/user/create-user.service'

class CreateUserController {
  async handle(req: Request, res: Response) {
    const userSchema = z.object({
      name: z.string().min(5),
      email: z.string().email(),
      password: z.string().min(8),
      birthday: z.string().transform((value) => new Date(value)),
    })

    const data = userSchema.parse(req.body)

    await createUserService.execute(data)

    return res.status(201).end()
  }
}

export default new CreateUserController()
