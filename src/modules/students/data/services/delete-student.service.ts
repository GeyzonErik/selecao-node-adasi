import { Injectable } from "@nestjs/common";
import { DeleteStudent } from "../../domain/usecases";
import { StudentRepository } from "../contracts";

@Injectable()
export class DeleteStudentService implements DeleteStudent {
    constructor( 
        private readonly studentRepository: StudentRepository 
    ) {}

    async execute(studentCpf: string): Promise<void> {
        await this.studentRepository.deleteStudent(studentCpf)
    }
}