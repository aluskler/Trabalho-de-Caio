import { AppError } from '../../../errors/AppError'
import { prisma } from '../../../libs/prisma'

interface IRequest {
  title: string
  description: string
  list_id: string
}

class CreateTaskService {
  async execute(data: IRequest) {
    const isListExists = await prisma.list.findUnique({
      where: {
        id: data.list_id,
      },
    })

    if (!isListExists) {
      throw new AppError('List not found', 404)
    }

    await prisma.task.create({
      data,
    })
  }
}

export default new CreateTaskService()
