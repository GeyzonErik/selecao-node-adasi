import { Course } from "../../domain/models/course";

export abstract class CourseRepository {
    create: (course: Course) => Promise<void>;
    getCourses: () => Promise<Array<Course>>;
    getCourseById: (courseId: string) => Promise<Course>
}