import { Injectable } from "@nestjs/common";
import { GetStudents } from "../../domain/usecases";
import { Student } from "../../domain/models";
import { StudentRepository } from "../contracts";

@Injectable()
export class GetStudentsService implements GetStudents {
    constructor(
        private readonly studentRepository: StudentRepository
    ) {}

    async execute(): Promise<Array<Student>> {
        const students = await this.studentRepository.getAllStudents();
        
        return students;
    }
}