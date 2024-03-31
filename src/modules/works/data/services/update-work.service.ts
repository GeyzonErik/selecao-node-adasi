import { Injectable } from "@nestjs/common";
import { UpdateWorkData, Work } from "../../domain/models";
import { UpdateWork } from "../../domain/usecases";
import { WorkRepository } from "../contracts";
import { ValidTolerance, validTime } from "../../domain/resources";
import { RegisterNotFound } from "src/modules/chore/errors";

@Injectable()
export class UpdateWorkService implements UpdateWork {
    constructor(
        private readonly workRepository: WorkRepository,
    ) {}

    async execute(workId: string, updateWorkData: UpdateWorkData): Promise<Work> {
        const { appointmentStart, appointmentEnd, startHour, endHour } = updateWorkData;
        const workExists = await this.workRepository.getById(workId);

        if(!workExists) {
            throw new RegisterNotFound('atividade')
        }

        validTime(appointmentStart, appointmentEnd);

        if(startHour && endHour) {
            validTime(startHour, endHour);
        }

        if(startHour) {
            ValidTolerance(appointmentStart, startHour);
        }

        const updatedWork = await this.workRepository.update(workId, updateWorkData)

        return updatedWork
    }
}