import { ApiProperty } from "@nestjs/swagger";
import { UpdateWorkData } from "../../domain/models";

export class UpdateWorkDto implements UpdateWorkData {
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
}