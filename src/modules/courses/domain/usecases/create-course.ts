import { CourseData } from "../models";

export abstract class CreateCourse {
    execute: (CourseData: CourseData) => Promise<void>
}