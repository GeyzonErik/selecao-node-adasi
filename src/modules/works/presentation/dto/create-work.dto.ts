import { ApiProperty } from "@nestjs/swagger";
import { WorkData } from "../../domain/models";
import { Assignment } from "src/modules/assignments/domain/models";
import { Student } from "src/modules/students/domain/models";

export class CreateWorkDto implements WorkData {
    @ApiProperty()
    date: Date;

    @ApiProperty()
    appointmentStart: Date;

    @ApiProperty()
    appointmentEnd: Date;

    @ApiProperty({ required: false })
    startHour?: Date;

    @ApiProperty({ required: false })
    endHour?: Date;

    @ApiProperty({ example: {
        'id': '025ac629-0979-4ac6-a4b6-7aaad728af5a'
    }})
    assignment: Assignment;

    @ApiProperty({ example: {
        'cpf': '588.051.770-59'
    }})
    student: Student;
}