import { Injectable } from "@nestjs/common";
import { GetCourses } from "../../domain/usecases";
import { Course } from "../../domain/models";
import { CourseRepository } from "../contracts";

@Injectable()
export class GetCoursesService implements GetCourses {
    constructor(
        private readonly courseRepository: CourseRepository
    ) {}

    async execute(): Promise<Array<Course>>{
        const courses = await this.courseRepository.getCourses();

        return courses
    }
}