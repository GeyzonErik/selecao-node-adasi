import { Injectable } from "@nestjs/common";
import { WorkRepository } from "../../data/contracts";
import { WorkData } from "../../domain/models";
import { PrismaService } from "src/modules/prisma/prisma.service";

@Injectable()
export class pgWorkRepository implements WorkRepository {
    constructor(
        private readonly prismaClient: PrismaService
    ) {}

    async create(workData: WorkData) {
        await this.prismaClient.works.create({
            data: {
                ...workData,
                assignment: { connect: { id: workData.assignment.id } },
                student: { connect: { cpf: workData.student.cpf } }
            }
        })
    }

    async get() {
        const works = await this.prismaClient.works.findMany({
            include: {
                assignment: true,
                student: true
            }
        })

        return works
    }

    async getById(workId: string) {
        const work = await this.prismaClient.works.findUnique({
            where: {
                id: workId
            },
            include: {
                assignment: true,
                student: true
            }
        })

        return work
    }

    async update(workId: string, workData: WorkData) {
        const updatedWork = await this.prismaClient.works.update({
            where: {
                id: workId
            },
            data: {
                ...workData,
                assignment: { connect: { id: workData.assignment.id } },
                student: { connect: { cpf: workData.student.cpf } }
            },
            include: {
                assignment: true,
                student: true
            }
        })

        return updatedWork;
    }

    async delete(workId: string) {
        await this.prismaClient.works.delete({
            where: {
                id: workId
            }
        })
    }
}