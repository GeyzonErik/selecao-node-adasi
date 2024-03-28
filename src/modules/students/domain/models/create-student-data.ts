import { CourseData } from "src/modules/courses/domain/models"

export interface StudentData {
    cpf: string
    register: string
    name: string
    course?: Array<CourseData>
}