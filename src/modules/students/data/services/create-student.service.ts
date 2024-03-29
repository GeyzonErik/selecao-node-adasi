import { Injectable } from "@nestjs/common";
import { CreateStudent } from "../../domain/usecases";
import { StudentData } from "../../domain/models";
import { StudentRepository } from "../contracts";

@Injectable()
export class CreateStudentService implements CreateStudent {
    constructor(
        private readonly studentRepository: StudentRepository
    ) {}

    async execute(studentData: StudentData): Promise<void> {
        await this.studentRepository.create(studentData)
    }
}