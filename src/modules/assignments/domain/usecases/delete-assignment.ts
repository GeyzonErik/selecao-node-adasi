export abstract class DeleteAssignment {
    execute: (assignmentId: string) => Promise<void>
}