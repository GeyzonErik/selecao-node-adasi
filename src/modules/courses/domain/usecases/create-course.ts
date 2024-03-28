import { CreateCourseData } from "../models";

export abstract class CreateCourse {
    execute: (createCourseData: CreateCourseData) => Promise<void>
}