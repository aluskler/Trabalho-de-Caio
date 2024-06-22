import { List } from '@prisma/client'
import { AppError } from '../../../errors/AppError'
import { prisma } from '../../../libs/prisma'

interface IRequest {
  id: string
}

class DetailsListService {
  async execute({ id }: IRequest): Promise<List> {
    const isListExists = await prisma.list.findUnique({
      where: { id },
      include: { tasks: true },
    })

    if (!isListExists) {
      throw new AppError('List not found', 404)
    }

    return isListExists
  }
}

export default new DetailsListService()
