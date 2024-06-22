import { AppError } from '../../../errors/AppError'
import { prisma } from '../../../libs/prisma'

interface Update {
  name?: string
}

interface IRequest {
  id: string
  data: Update
}

class UpdateListService {
  async execute({ id, data }: IRequest): Promise<void> {
    const isListExists = await prisma.list.findUnique({ where: { id } })

    if (!isListExists) {
      throw new AppError('List not found', 404)
    }

    await prisma.list.update({ where: { id }, data })
  }
}

export default new UpdateListService()
