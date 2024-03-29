import { Student } from "@prisma/client";
import { UpdateStudentData } from "../models";

export abstract class UpdateStudent {
    execute: (studentCpf: string, updateStudentData: UpdateStudentData) => Promise<Student>;
}