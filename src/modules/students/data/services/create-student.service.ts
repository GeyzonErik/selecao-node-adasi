import { Injectable } from "@nestjs/common";
import { CreateStudent } from "../../domain/usecases";
import { StudentData } from "../../domain/models";
import { StudentRepository } from "../contracts";
import { CourseRepository } from "src/modules/courses/data/contracts";

@Injectable()
export class CreateStudentService implements CreateStudent {
    constructor(
        private readonly studentRepository: StudentRepository,
        private readonly courseRepository: CourseRepository
    ) {}

    async execute(studentData: StudentData): Promise<void> {
        await this.studentRepository.create(studentData)
    }
}