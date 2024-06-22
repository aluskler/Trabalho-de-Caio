import { User } from '@prisma/client'
import { prisma } from '../../../libs/prisma'
import { AppError } from '../../../errors/AppError'

interface IRequest {
  id: string
}

class DetailsUserService {
  async execute({ id }: IRequest): Promise<User> {
    const isUserExists = await prisma.user.findUnique({ where: { id } })

    if (!isUserExists) {
      throw new AppError('User not found', 404)
    }

    return isUserExists
  }
}

export default new DetailsUserService()
