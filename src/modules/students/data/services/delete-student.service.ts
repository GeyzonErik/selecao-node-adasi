import { Injectable } from "@nestjs/common";
import { DeleteStudent } from "../../domain/usecases";
import { StudentRepository } from "../contracts";
import { RegisterNotFound } from "src/modules/chore/errors";

@Injectable()
export class DeleteStudentService implements DeleteStudent {
    constructor( 
        private readonly studentRepository: StudentRepository 
    ) {}

    async execute(studentCpf: string): Promise<void> {
        const studentExists = await this.studentRepository.getStudentByCpf(studentCpf);

        if(!studentExists) {
            throw new RegisterNotFound('cpf')
        } 

        await this.studentRepository.deleteStudent(studentCpf)
    }
}