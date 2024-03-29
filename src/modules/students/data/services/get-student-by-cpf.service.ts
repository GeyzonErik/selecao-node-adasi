import { Injectable } from "@nestjs/common";
import { GetStudentByCpf } from "../../domain/usecases";
import { StudentRepository } from "../contracts";
import { Student } from "../../domain/models";

@Injectable()
export class GetStudentByCpfService implements GetStudentByCpf {
    constructor( 
        private readonly studentRepository: StudentRepository 
    ) {}

    async execute(studentCpf: string): Promise<Student> {
        const student = await this.studentRepository.getStudentByCpf(studentCpf);

        return student;
    }
}