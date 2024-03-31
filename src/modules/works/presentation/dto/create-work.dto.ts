import { ApiProperty } from "@nestjs/swagger";
import { WorkData } from "../../domain/models";
import { Assignment } from "src/modules/assignments/domain/models";
import { Student } from "src/modules/students/domain/models";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateWorkDto implements WorkData {
    @ApiProperty({ example: '2024-03-31' })
    @IsNotEmpty({ message: 'data' })
    date: Date;

    @ApiProperty({ example: '2024-03-31T10:00' })
    @IsNotEmpty({ message: 'agendamento inicio' })
    appointmentStart: Date;

    @ApiProperty({ example: '2024-03-31T16:00' })
    @IsNotEmpty({ message: 'agendamento fim' })
    appointmentEnd: Date;

    @ApiProperty({ required: false, example: '2024-03-31T10:15' })
    @IsOptional()
    startHour?: Date;

    @ApiProperty({ required: false, example: '2024-03-31T15:00' })
    @IsOptional()
    endHour?: Date;

    @ApiProperty({ example: {
        'id': '[validAssignmentId]'
    }})
    @IsNotEmpty({ message: 'tarefa' })
    assignment: Assignment;

    @ApiProperty({ example: {
        'cpf': '[validStudentCPf]'
    }})
    @IsNotEmpty({ message: 'estudante' })
    student: Student;
}