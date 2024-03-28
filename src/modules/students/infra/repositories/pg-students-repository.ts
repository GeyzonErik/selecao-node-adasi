import { Injectable } from "@nestjs/common";
import { StudentRepository } from "../../data/contracts";
import { PrismaService } from "src/modules/prisma/prisma.service";
import { StudentData } from "../../domain/models";

@Injectable()
export class pgStudentRepository implements StudentRepository {
    constructor( private readonly prismaCliente: PrismaService ) { }

    async create(studentData: StudentData) {
        console.log(studentData);
    }
}