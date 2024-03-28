import { CourseData } from "../../domain/models";
import { Course } from "../../domain/models/course";

export abstract class CourseRepository {
    create: (courseData: CourseData) => Promise<void>;
    getCourses: () => Promise<Array<Course>>;
    getCourseById: (courseId: string) => Promise<Course>;
    updateCourse: (courseId: string, course: Course) => Promise<Course>;
    deleteCourse: (courseId: string) => Promise<void>
}