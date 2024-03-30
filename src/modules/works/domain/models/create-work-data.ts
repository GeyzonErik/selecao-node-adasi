import { Assignment } from "src/modules/assignments/domain/models"
import { Student } from "src/modules/students/domain/models"

export interface WorkData {
    date: Date
    appointmentStart: Date
    appointmentEnd: Date
    startHour?: Date
    endHour?: Date

    assignment: Assignment
    student: Student
}