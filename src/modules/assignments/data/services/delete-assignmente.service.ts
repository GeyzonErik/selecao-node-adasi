import { Injectable } from "@nestjs/common";
import { DeleteAssignment } from "../../domain/usecases";
import { AssignmentRepository } from "../contracts";
import { RegisterNotFound } from "src/modules/chore/errors";

@Injectable()
export class DeleteAssignmentService implements DeleteAssignment {
    constructor(
        private readonly assignmentRepository: AssignmentRepository
    ) {}

    async execute(assignmentId: string): Promise<void> {
        const assignment = await this.assignmentRepository.getById(assignmentId);

        if(!assignment) {
            throw new RegisterNotFound('tarefa')
        }

        await this.assignmentRepository.delete(assignmentId)
    }
}