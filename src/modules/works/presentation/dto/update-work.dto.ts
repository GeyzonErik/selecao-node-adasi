import { ApiProperty } from "@nestjs/swagger";
import { UpdateWorkData } from "../../domain/models";
import { IsNotEmpty } from "class-validator";

export class UpdateWorkDto implements UpdateWorkData {
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
    startHour?: Date;

    @ApiProperty({ required: false, example: '2024-03-31T15:00' })
    endHour?: Date;
}