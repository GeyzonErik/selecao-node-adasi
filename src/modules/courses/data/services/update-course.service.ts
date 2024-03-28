import { Injectable } from "@nestjs/common";
import { UpdateCourse } from "../../domain/usecases";
import { Course } from "@prisma/client";
import { CourseRepository } from "../contracts";

@Injectable()
export class UpdateCourseService implements UpdateCourse {
    constructor(
        private readonly courseRepository: CourseRepository
    ) {}

    async execute(courseId: string, course: Course): Promise<Course> {
        const updatedCourse =  await this.courseRepository.updateCourse(courseId, course)

        return updatedCourse;
    }
}