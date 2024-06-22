import { prisma } from '../../../libs/prisma'

interface IRequest {
  id: string
}

class UncloseTaskService {
  async execute({ id }: IRequest) {
    await prisma.task.update({
      where: {
        id,
      },
      data: {
        status: false,
      },
    })
  }
}

export default new UncloseTaskService()
