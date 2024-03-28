import { StudentData } from "../models";

export abstract class CreateStudent {
    execute: (studentData: StudentData) => Promise<void>
}