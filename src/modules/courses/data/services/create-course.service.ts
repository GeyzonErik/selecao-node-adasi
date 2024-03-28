import { Injectable } from "@nestjs/common";
import { CreateCourse } from "../../domain/usecases";
import { CourseRepository } from "../contracts";
import { CreateCourseData } from "../../domain/models";

@Injectable()
export class CreateCourseService implements CreateCourse {
    constructor(
        private readonly courseRepository: CourseRepository
    ) {}

    async execute(createCourseData: CreateCourseData) {
        await this.courseRepository.create(createCourseData)
    }
}