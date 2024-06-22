import { AppError } from '../../../errors/AppError'
import { prisma } from '../../../libs/prisma'

interface IRequest {
  id: string
}

class DeleteUserService {
  async execute({ id }: IRequest): Promise<void> {
    const isUserExists = await prisma.user.findUnique({
      where: {
        id,
      },
    })

    if (!isUserExists) {
      throw new AppError('User not found', 404)
    }

    const isListExists = await prisma.list.findMany({
      where: { user_id: id },
      include: { tasks: true },
    })

    if (isListExists.length) {
      const isTasksExists = isListExists.reduce((currentValue, element) => {
        currentValue = element.tasks.length > 0

        return currentValue
      }, false)

      if (isTasksExists) {
        await prisma.task.deleteMany({ where: { list_id: isListExists[0].id } })
      }

      await prisma.list.deleteMany({ where: { user_id: id } })
    }

    await prisma.user.delete({
      where: { id },
    })
  }
}

export default new DeleteUserService()
