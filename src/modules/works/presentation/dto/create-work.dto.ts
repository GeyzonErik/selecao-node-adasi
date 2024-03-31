import { ApiProperty } from "@nestjs/swagger";
import { WorkData } from "../../domain/models";
import { Assignment } from "src/modules/assignments/domain/models";
import { Student } from "src/modules/students/domain/models";
import { IsNotEmpty } from "class-validator";

export class CreateWorkDto implements WorkData {
    @ApiProperty({ example: '2024-03-31' })
    @IsNotEmpty()
    date: Date;

    @ApiProperty({ example: '2024-03-31T10:00' })
    @IsNotEmpty()
    appointmentStart: Date;

    @ApiProperty({ example: '2024-03-31T16:00' })
    @IsNotEmpty()
    appointmentEnd: Date;

    @ApiProperty({ required: false, example: '2024-03-31T10:15' })
    startHour?: Date;

    @ApiProperty({ required: false, example: '2024-03-31T15:00' })
    endHour?: Date;

    @ApiProperty({ example: {
        'id': '[validAssignmentId]'
    }})
    assignment: Assignment;

    @ApiProperty({ example: {
        'cpf': '[validStudentCPf]'
    }})
    student: Student;
}