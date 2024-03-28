import { CourseData } from "src/modules/courses/domain/models"

interface StudentInterface {
    cpf: string
    register: string
    name: string

    course?: Array<CourseData>
    // works?: Array<WorksData>
}

export class Student {
    public readonly cpf: string;
    public readonly register: string;
    public name: string;
    public course?: Array<CourseData>
    // public works?: Array<WorksData>

    constructor(props: StudentInterface) {
        Object.assign(this, props)
    }
}