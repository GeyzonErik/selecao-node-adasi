interface AssignmentInterface {
    id: string
    name: string
}

export class Assignment {
    public readonly id: string
    public name: string

    constructor(props: AssignmentInterface) {
        Object.assign(this, props);
    }
}