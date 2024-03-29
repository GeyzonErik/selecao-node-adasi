import { Assignment, AssignmentData } from "../../domain/models"

export abstract class AssignmentRepository {
    create: (assignmentData: AssignmentData) => Promise<void>
    get: () => Promise<Array<Assignment>>
    getById: (assignmentId: string) => Promise<Assignment>
    update: (assignmentId: string, assignmentData: AssignmentData) => Promise<Assignment>
    delete: (assignmentId: string) => Promise<void>
}