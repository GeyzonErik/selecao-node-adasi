import { Injectable } from "@nestjs/common";
import { StudentRepository } from "../../data/contracts";
import { PrismaService } from "src/modules/prisma/prisma.service";
import { StudentData, UpdateStudentData } from "../../domain/models";

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

    async getAllStudents() {
        const students = await this.prismaCliente.student.findMany();

        return students;
    }

    async getStudentByCpf(studentCpf: string) {
        const student = await this.prismaCliente.student.findUnique({
            where: {
                cpf: studentCpf
            },
            include: {
                courses: true
            }
        })
        
        return student
    }

    async updateStudent(studentCpf: string, updateStudentData: UpdateStudentData) {
        const { courses, ...data} = updateStudentData

        const updatedStudent = await this.prismaCliente.student.update({
            where: {
                cpf: studentCpf
            },
            data: {
                ...data
            }
        })

        return updatedStudent;

        // const courseIds = courses.map(course => ({ id: course.id }))
        
        // if(courseIds.length > 0) {
        //     const updatedStudent = await this.prismaCliente.student.create({
        //         data: {
        //             ...data,
        //             courses: {
        //                 connect: courseIds
        //             }
        //         }
        //     })
            
        //     return updatedStudent;
        // }

        // const updatedStudent = await this.prismaCliente.student.create({
        //     data: {
        //         ...data
        //     }
        // })

        // return updatedStudent;
    }
}