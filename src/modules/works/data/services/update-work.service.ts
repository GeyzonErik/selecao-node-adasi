import { Injectable } from "@nestjs/common";
import { UpdateWorkData, Work } from "../../domain/models";
import { UpdateWork } from "../../domain/usecases";
import { WorkRepository } from "../contracts";

@Injectable()
export class UpdateWorkService implements UpdateWork {
    constructor(
        private readonly workRepository: WorkRepository
    ) {}

    async execute(workId: string, updateWorkData: UpdateWorkData): Promise<Work> {
        const updatedWork = await this.workRepository.update(workId, updateWorkData)

        return updatedWork
    }
}