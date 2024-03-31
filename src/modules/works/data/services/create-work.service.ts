import { Injectable } from "@nestjs/common";
import { WorkData } from "../../domain/models";
import { CreateWork } from "../../domain/usecases";
import { WorkRepository } from "../contracts";

@Injectable()
export class CreateWorkService implements CreateWork {
    constructor(
        private readonly workRepository: WorkRepository 
    ) {}

    async execute(workData: WorkData): Promise<void> {
        await this.workRepository.create(workData);
    }
}