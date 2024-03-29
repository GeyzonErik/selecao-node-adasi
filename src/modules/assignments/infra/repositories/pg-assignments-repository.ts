import { Injectable } from "@nestjs/common";
import { AssignmentRepository } from "../../data/contracts";
import { PrismaService } from "src/modules/prisma/prisma.service";
import { AssignmentData } from "../../domain/models";

@Injectable()
export class pgAssignmentRepository implements AssignmentRepository {
    constructor(
        private readonly prismaCliente: PrismaService
    ) {}

    async create(assignmentData: AssignmentData) {
        await this.prismaCliente.assignment.create({
            data: {
                ...assignmentData
            }
        })
    }

    async get() {
        const assignments = await this.prismaCliente.assignment.findMany();

        return assignments;
    }

    async getById(assignmentId: string) {
        const assignment = await this.prismaCliente.assignment.findUnique({
            where: {
                id: assignmentId
            }
        });

        return assignment;
    }

    async update(assignmentId: string, assignmentData: AssignmentData) {
        const updatedAssignment = await this.prismaCliente.assignment.update({
            where: {
                id: assignmentId
            },
            data: {
                ...assignmentData
            }
        });

        return updatedAssignment;
    }

    async delete(assignmentId: string) {
        await this.prismaCliente.assignment.delete({
            where:{
                id: assignmentId
            }
        })
    }
}