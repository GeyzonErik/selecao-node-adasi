import { Course } from "src/modules/courses/domain/models"

interface StudentInterface {
    cpf: string
    register: string
    name: string

    courses?: Array<Course>
    // works?: Array<WorksData>
}

export class Student {
    public readonly cpf: string;
    public readonly register: string;
    public name: string;
    public courses?: Array<Course>
    // public works?: Array<WorksData>

    constructor(props: StudentInterface) {
        Object.assign(this, props)
    }
}