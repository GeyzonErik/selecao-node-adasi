import { Injectable } from "@nestjs/common";
import { WorkData } from "../../domain/models";
import { CreateWork } from "../../domain/usecases";
import { WorkRepository } from "../contracts";
import { ValidTolerance, validTime } from "../../domain/resources";
import { StudentRepository } from "src/modules/students/data/contracts";
import { AssignmentRepository } from "src/modules/assignments/data/contracts";
import { RegisterNotFound } from "src/modules/chore/errors";

@Injectable()
export class CreateWorkService implements CreateWork {
    constructor(
        private readonly workRepository: WorkRepository,
        private readonly studentRepository: StudentRepository,
        private readonly assignmentRepository: AssignmentRepository
    ) {}

    async execute(workData: WorkData): Promise<void> {
        const { appointmentStart, appointmentEnd, startHour, endHour, student, assignment } = workData;
        const studentExists = await this.studentRepository.getStudentByCpf(student.cpf);
        const assignmentExists = await this.assignmentRepository.getById(assignment.id);

        validTime(appointmentStart, appointmentEnd);

        if(startHour && endHour) {
            validTime(startHour, endHour);
        }

        if(startHour) {
            ValidTolerance(appointmentStart, startHour);
        }

        if(!studentExists) {
            throw new RegisterNotFound('estudante')
        }

        if(!assignmentExists) {
            throw new RegisterNotFound('tarefa')
        }

        await this.workRepository.create(workData);
    }
}