import { Course, CourseData } from "../models";

export abstract class UpdateCourse {
    execute: (courseId: string, CourseData: CourseData) => Promise<Course>
}