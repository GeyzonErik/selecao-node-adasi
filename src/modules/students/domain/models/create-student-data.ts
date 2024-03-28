import { Course } from "src/modules/courses/domain/models"

export interface StudentData {
    cpf: string
    register: string
    name: string
    courses?: Array<Course>
}