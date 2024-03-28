import { Injectable } from "@nestjs/common";
import { GetCourseById } from "../../domain/usecases";
import { Course } from "../../domain/models";
import { CourseRepository } from "../contracts";

@Injectable()
export class GetCourseByIdService implements GetCourseById {
    constructor(
        private readonly courseRepository: CourseRepository
    ) {}

    async execute(courseId: string): Promise<Course>{
        const course = await this.courseRepository.getCourseById(courseId);

        return course
    }
}