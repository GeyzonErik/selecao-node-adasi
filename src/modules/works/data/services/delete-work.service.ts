import { Injectable } from "@nestjs/common";
import { DeleteWork } from "../../domain/usecases";
import { WorkRepository } from "../contracts";
import { RegisterNotFound } from "src/modules/chore/errors";

@Injectable()
export class DeleteWorkService implements DeleteWork {
    constructor(
        private readonly workRepository: WorkRepository
    ) {}

    async execute(workId: string): Promise<void> {
        const workExists = await this.workRepository.getById(workId);

        if(!workExists) {
            throw new RegisterNotFound('atividade')
        }

        await this.workRepository.delete(workId);
    }
}