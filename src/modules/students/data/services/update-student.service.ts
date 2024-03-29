import { Injectable } from "@nestjs/common";
import { UpdateStudent } from "../../domain/usecases";
import { StudentRepository } from "../contracts";
import { Student, UpdateStudentData } from "../../domain/models";

@Injectable()
export class UpdateStudentService implements UpdateStudent {
    constructor( 
        private readonly studentRepository: StudentRepository
    ) {}

    async execute(studentCpf: string, updateStudentData: UpdateStudentData): Promise<Student> {
        const updatedStudent = await this.studentRepository.updateStudent(studentCpf, updateStudentData);

        return updatedStudent;
    }
}