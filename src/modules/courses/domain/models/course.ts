interface CourseInterface {
    id: string,
    name: string,
    // students?: Array<any> 
}

export class Course {
    public readonly id: string
    public name: string
    // public students?: Array<any>

    constructor(props: CourseInterface) {
        Object.assign(this, props);
    }
}