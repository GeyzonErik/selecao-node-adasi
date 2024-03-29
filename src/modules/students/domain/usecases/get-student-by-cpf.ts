import { Student, UpdateStudentData } from "../models";

export abstract class GetStudentByCpf {
    execute: (studentCpf: string) => Promise<Student>
}