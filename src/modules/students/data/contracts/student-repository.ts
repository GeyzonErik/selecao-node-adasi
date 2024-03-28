import { Student } from "../../domain/models";

export abstract class StudentRepository {
    create: (student: Student) => Promise<void>;
}