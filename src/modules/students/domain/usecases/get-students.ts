import { Student } from "../models";

export abstract class GetStudents {
    execute: () => Promise<Array<Student>>
}