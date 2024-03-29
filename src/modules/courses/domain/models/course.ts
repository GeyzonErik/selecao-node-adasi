interface CourseInterface {
    id: string,
    name: string,
}

export class Course {
    public readonly id: string
    public name: string

    constructor(props: CourseInterface) {
        Object.assign(this, props);
    }
}