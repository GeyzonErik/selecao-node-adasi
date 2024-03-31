import { Injectable } from "@nestjs/common";
import { Work } from "../../domain/models";
import { GetWorkById } from "../../domain/usecases";
import { WorkRepository } from "../contracts";

@Injectable()
export class GetWorkByIdService implements GetWorkById {
    constructor(
        private readonly workRepository: WorkRepository
    ) {}

        async execute(workId: string): Promise<Work> {
            const work = await this.workRepository.getById(workId)

            return work;
        }
}