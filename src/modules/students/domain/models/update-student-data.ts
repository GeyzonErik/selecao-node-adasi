import { CourseData } from "src/modules/courses/domain/models"

export interface UpdateStudentData {
    name: string
    course?: Array<CourseData>
}