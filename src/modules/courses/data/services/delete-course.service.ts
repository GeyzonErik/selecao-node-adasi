import { Injectable } from "@nestjs/common";
import { DeleteCourse } from "../../domain/usecases";
import { CourseRepository } from "../contracts";

@Injectable()
export class DeleteCourseService implements DeleteCourse {
    constructor(
        private readonly courseRepository: CourseRepository    
    ) {}

    async execute(courseId: string): Promise<void> {
        const course =  await this.courseRepository.getCourseById(courseId);

        await this.courseRepository.deleteCourse(course.id)
    }
}