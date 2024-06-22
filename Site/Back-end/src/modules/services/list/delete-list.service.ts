import { AppError } from '../../../errors/AppError'
import { prisma } from '../../../libs/prisma'

interface IRequest {
  id: string
}

class DeleteListService {
  async execute({ id }: IRequest) {
    const isListExists = await prisma.list.findUnique({
      where: {
        id,
      },
    })

    if (!isListExists) {
      throw new AppError('List not found', 404)
    }

    await prisma.task.deleteMany({
      where: {
        list_id: isListExists.id,
      },
    })

    await prisma.list.delete({
      where: {
        id,
      },
    })
  }
}

export default new DeleteListService()
