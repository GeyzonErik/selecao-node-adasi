import { Injectable } from "@nestjs/common";
import { GetAllAssignments } from "../../domain/usecases";
import { AssignmentRepository } from "../contracts";
import { Assignment } from "../../domain/models";

@Injectable()
export class GetAllAssignmentsService implements GetAllAssignments {
    constructor(
        private readonly assignmentRepository: AssignmentRepository
    ) {}

    async execute(): Promise<Array<Assignment>> {
        const assignments = await this.assignmentRepository.get();

        return assignments;
    }
}