import { Student, UpdateStudentData } from "../../domain/models";

export abstract class StudentRepository {
    create: (student: Student) => Promise<void>;
    getAllStudents: () => Promise<Array<Student>>;
    getStudentByCpf: (studentCpf: string) => Promise<Student>
    updateStudent: (studentCpf: string, updateStudentData: UpdateStudentData) => Promise<Student>
}