import { Injectable } from "@nestjs/common";
import { StudentRepository } from "../../data/contracts";
import { PrismaService } from "src/modules/prisma/prisma.service";
import { StudentData } from "../../domain/models";

@Injectable()
export class pgStudentRepository implements StudentRepository {
    constructor( private readonly prismaCliente: PrismaService ) { }

    async create(studentData: StudentData) {
        const { courses, ...data} = studentData

        const courseIds = courses.map(course => ({ id: course.id }))
        
        if(courseIds.length > 0) {
            await this.prismaCliente.student.create({
                data: {
                    ...data,
                    courses: {
                        connect: courseIds
                    }
                }
            })
            
            return;
        }

        await this.prismaCliente.student.create({
            data: {
                ...data
            }
        })

    }
}