import { prisma } from '../../../libs/prisma'

interface IRequest {
  name: string
  description: string
  user_id: string
}

class CreateListService {
  async execute(data: IRequest) {
    await prisma.list.create({
      data,
    })
  }
}

export default new CreateListService()
