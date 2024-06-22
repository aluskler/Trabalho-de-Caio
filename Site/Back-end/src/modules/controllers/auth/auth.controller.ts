import { Request, Response } from 'express'
import { z } from 'zod'
import authService from '../../services/auth/auth.service'

class AuthController {
  async handle(req: Request, res: Response) {
    const authSchema = z.object({
      email: z.string().email(),
      password: z.string().min(8),
    })

    const { email, password } = authSchema.parse(req.body)

    const token = await authService.execute({ email, password })

    return res.status(200).json(token)
  }
}

export default new AuthController()
