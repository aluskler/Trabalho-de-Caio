import { compareSync } from 'bcrypt'
import { AppError } from '../../../errors/AppError'
import { prisma } from '../../../libs/prisma'
import { sign } from 'jsonwebtoken'

interface Auth {
  email: string
  password: string
}

class AuthService {
  async execute({ email, password }: Auth) {
    const isUserExists = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (!isUserExists) {
      throw new AppError('Email/Password does not exists', 401)
    }

    const comparePassword = compareSync(password, isUserExists.password)

    if (!comparePassword) {
      throw new AppError('Email/Password does not exists', 401)
    }

    const payload = {
      id: isUserExists.id,
    }

    const jwtSecret = process.env.JWT_SECRET as string

    const token = sign(payload, jwtSecret, {
      expiresIn: '1d',
    })

    return token
  }
}

export default new AuthService()
