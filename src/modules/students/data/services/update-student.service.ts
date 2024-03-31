import { Injectable } from "@nestjs/common";
import { UpdateStudent } from "../../domain/usecases";
import { StudentRepository } from "../contracts";
import { Student, UpdateStudentData } from "../../domain/models";
import { RegisterNotFound } from "src/modules/chore/errors";
import { CourseRepository } from "src/modules/courses/data/contracts";

@Injectable()
export class UpdateStudentService implements UpdateStudent {
    constructor( 
        private readonly studentRepository: StudentRepository,
        private readonly courseRepository: CourseRepository
    ) {}

    async execute(studentCpf: string, updateStudentData: UpdateStudentData): Promise<Student> {
        const { courses } = updateStudentData;
        const studentExists = await this.studentRepository.getStudentByCpf(studentCpf);

        if(!studentExists) {
            throw new RegisterNotFound('estudante')
        }

        await Promise.all(courses.map(async(course) => {
            const courseExist = await this.courseRepository.getCourseById(course.id);

            if(!courseExist) {
                throw new RegisterNotFound(`curso de id: ${course.id}`)
            }
        }))

        const updatedStudent = await this.studentRepository.updateStudent(studentCpf, updateStudentData);
        return updatedStudent;
    }
}