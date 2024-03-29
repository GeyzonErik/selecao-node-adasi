import { Injectable } from "@nestjs/common";
import { DeleteAssignment } from "../../domain/usecases";
import { AssignmentRepository } from "../contracts";

@Injectable()
export class DeleteAssignmentService implements DeleteAssignment {
    constructor(
        private readonly assignmentRepository: AssignmentRepository
    ) {}

    async execute(assignmentId: string): Promise<void> {
        await this.assignmentRepository.delete(assignmentId)
    }
}