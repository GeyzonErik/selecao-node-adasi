import { AssignmentData } from "../models";

export abstract class CreateAssignment {
    execute: (assignmentData: AssignmentData) => Promise<void>
}