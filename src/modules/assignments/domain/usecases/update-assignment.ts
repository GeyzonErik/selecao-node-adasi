import { Assignment, AssignmentData } from "../models";

export abstract class UpdateAssignment {
    execute: (assignmentId: string, assignmentData: AssignmentData) => Promise<Assignment>
}