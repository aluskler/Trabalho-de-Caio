import { prisma } from "../../../libs/prisma";

interface IRequest {
    id: string
}

class ConcludeTaskService {
    async execute({ id }: IRequest) {
        await prisma.task.update({
            where: {
                id
            },
            data: {
                status: true
            }
        })
    }
}

export default new ConcludeTaskService()