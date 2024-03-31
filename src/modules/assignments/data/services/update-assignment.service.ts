import { Injectable } from "@nestjs/common";
import { UpdateAssignment } from "../../domain/usecases";
import { AssignmentRepository } from "../contracts";
import { Assignment, AssignmentData } from "../../domain/models";
import { RegisterNotFound } from "src/modules/chore/errors";

@Injectable()
export class UpdateAssignmentService implements UpdateAssignment {
    constructor(
        private readonly assignmentRepository: AssignmentRepository
    ) {}

    async execute(assignmentId: string, assignmentData: AssignmentData): Promise<Assignment> {
        const assignment = await this.assignmentRepository.getById(assignmentId);

        if(!assignment) {
            throw new RegisterNotFound('tarefa')
        }

        const updatedAssignment = await this.assignmentRepository.update(assignmentId, assignmentData);

        return updatedAssignment
    }
}