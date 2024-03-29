import { Injectable } from "@nestjs/common";
import { AssignmentData } from "../../domain/models";
import { CreateAssignment } from "../../domain/usecases";
import { AssignmentRepository } from "../contracts";

@Injectable()
export class CreateAssignmentService implements CreateAssignment {
    constructor(
        private readonly assignmentRepository: AssignmentRepository
    ) {}

    async execute(assignmentData: AssignmentData): Promise<void> {
        await this.assignmentRepository.create(assignmentData)
    }
}