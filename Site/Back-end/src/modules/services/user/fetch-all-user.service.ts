import { User } from '@prisma/client'
import { prisma } from '../../../libs/prisma'
import { AppError } from '../../../errors/AppError'

class FetchAllUserService {
  async execute(): Promise<User[]> {
    const isUserExists = await prisma.user.findMany()

    if (!isUserExists) {
      throw new AppError('User not found', 404)
    }

    return isUserExists
  }
}

export default new FetchAllUserService()
