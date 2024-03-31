import { Injectable } from "@nestjs/common";
import { CreateStudent } from "../../domain/usecases";
import { StudentData } from "../../domain/models";
import { StudentRepository } from "../contracts";
import { RegisterInUse, RegisterNotFound } from "src/modules/chore/errors";
import { CourseRepository } from "src/modules/courses/data/contracts";

@Injectable()
export class CreateStudentService implements CreateStudent {
    constructor(
        private readonly studentRepository: StudentRepository,
        private readonly courseRepository: CourseRepository
    ) {}

    async execute(studentData: StudentData): Promise<void> {
        const { cpf, register, courses } = studentData
        const cpfInUse = await this.studentRepository.getStudentByCpf(cpf)
        const registerInUse = await this.studentRepository.getStudentByRegister(register)
        
        if(cpfInUse) {
            throw new RegisterInUse('cpf');
        }

        if(registerInUse) {
            throw new RegisterInUse('matricula')
        }

        await Promise.all(courses.map(async(course) => {
            const courseExist = await this.courseRepository.getCourseById(course.id);

            if(!courseExist) {
                throw new RegisterNotFound(`curso de id: ${course.id}`)
            }
        }))

        await this.studentRepository.create(studentData)
    }
}