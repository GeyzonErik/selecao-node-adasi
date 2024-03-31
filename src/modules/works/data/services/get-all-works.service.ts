import { Injectable } from "@nestjs/common";
import { Work } from "../../domain/models";
import { GetAllWorks } from "../../domain/usecases";
import { WorkRepository } from "../contracts";

@Injectable()
export class GetAllWorksService implements GetAllWorks {
    constructor(
        private readonly workRepository: WorkRepository
    ) {}

    async execute(): Promise<Array<Work>> {
        const works = await this.workRepository.get();

        return works
    }
}