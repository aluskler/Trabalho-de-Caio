import { AppError } from '../../../errors/AppError'
import { prisma } from '../../../libs/prisma'

interface UpdateTask {
  title?: string
  description?: string
}

interface IRequest {
  id: string
  data: UpdateTask
}

class UpdateTaskService {
  async execute({ id, data }: IRequest) {
    const isTasksExists = await prisma.task.findUnique({
      where: {
        id,
      },
    })

    if (!isTasksExists) {
      throw new AppError('Task not found', 404)
    }

    await prisma.task.update({
      where: {
        id,
      },
      data,
    })
  }
}

export default new UpdateTaskService()
