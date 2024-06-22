import { AppError } from '../../../errors/AppError'
import { prisma } from '../../../libs/prisma'

interface IRequest {
  id: string
}

class DetailsTaskService {
  async execute({ id }: IRequest) {
    const isTaskExists = await prisma.task.findUnique({
      where: {
        id,
      },
    })

    if (!isTaskExists) {
      throw new AppError('Task not found', 404)
    }

    return isTaskExists
  }
}

export default new DetailsTaskService()
