import { Injectable } from "@nestjs/common";
import { CreateCourse } from "../../domain/usecases";
import { CourseRepository } from "../contracts";
import { CourseData } from "../../domain/models";

@Injectable()
export class CreateCourseService implements CreateCourse {
    constructor(
        private readonly courseRepository: CourseRepository
    ) {}

    async execute(CourseData: CourseData): Promise<void> {
        await this.courseRepository.create(CourseData)
    }
}