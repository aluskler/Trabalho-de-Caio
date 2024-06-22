import { prisma } from '../../../libs/prisma'

import { AppError } from '../../../errors/AppError'

import { hashSync } from 'bcrypt'

interface IRequest {
  name: string
  birthday: Date
  email: string
  password: string
}

class CreateUserService {
  async execute(data: IRequest): Promise<void> {
    const isUserExists = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    })

    if (isUserExists) {
      throw new AppError('User already exists', 409)
    }

    const hashPassword = hashSync(data.password, 10)

    await prisma.user.create({
      data: {
        ...data,
        password: hashPassword,
      },
    })
  }
}

export default new CreateUserService()
