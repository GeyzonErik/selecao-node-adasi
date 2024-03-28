import { Course } from "../models";

export abstract class GetCourses {
    execute: () => Promise<Array<Course>>
}