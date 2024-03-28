import { Course } from "../models";

export abstract class GetCourseById {
    execute: (courseId: string) => Promise<Course>
}