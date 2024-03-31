import { Injectable } from "@nestjs/common";
import { GetAssignmentById } from "../../domain/usecases";
import { AssignmentRepository } from "../contracts";
import { Assignment } from "../../domain/models";
import { RegisterNotFound } from "src/modules/chore/errors";

@Injectable()
export class GetAssignmentByIdService implements GetAssignmentById {
    constructor(
        private readonly assignmentRepository: AssignmentRepository
    ) {}
    
    async execute(assignmentId: string): Promise<Assignment> {
        const assignment = await this.assignmentRepository.getById(assignmentId);

        if(!assignment) {
            throw new RegisterNotFound('tarefa')
        }

        return assignment;
    }
}