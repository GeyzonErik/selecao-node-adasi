import { Assignment } from "src/modules/assignments/domain/models"
import { Student } from "src/modules/students/domain/models"

interface WorkInterface {
    id: string
    date: Date
    appointmentStart: Date
    appointmentEnd: Date
    startHour?: Date
    endHour?: Date

    assignment: Assignment
    student: Student
}

export class Work {
    public readonly id: string
    public date: Date
    public appointmentStart: Date
    public appointmentEnd: Date
    public startHour?: Date
    public endHour?: Date

    public assignment: Assignment
    public student: Student
    
    constructor(props: WorkInterface) {
        Object.assign(this, props)
    }
}