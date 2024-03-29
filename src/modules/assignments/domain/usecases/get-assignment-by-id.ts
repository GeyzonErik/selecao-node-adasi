import { Assignment } from "../models";

export abstract class GetAssignmentById {
    execute: (assignmentId: string) => Promise<Assignment>
}