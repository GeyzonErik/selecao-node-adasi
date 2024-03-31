import { Injectable } from "@nestjs/common";
import { DeleteWork } from "../../domain/usecases";
import { WorkRepository } from "../contracts";

@Injectable()
export class DeleteWorkService implements DeleteWork {
    constructor(
        private readonly workRepository: WorkRepository
    ) {}

    async execute(workId: string): Promise<void> {
        await this.workRepository.delete(workId);
    }
}