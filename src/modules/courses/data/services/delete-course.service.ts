import { Injectable } from "@nestjs/common";
import { DeleteCourse } from "../../domain/usecases";
import { CourseRepository } from "../contracts";
import { RegisterNotFound } from "src/modules/chore/errors";

@Injectable()
export class DeleteCourseService implements DeleteCourse {
    constructor(
        private readonly courseRepository: CourseRepository    
    ) {}

    async execute(courseId: string): Promise<void> {
        const course =  await this.courseRepository.getCourseById(courseId);

        if(!course) {
            throw new RegisterNotFound('curso')
        }

        await this.courseRepository.deleteCourse(course.id)
    }
}