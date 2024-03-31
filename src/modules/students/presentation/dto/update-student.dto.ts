import { ApiProperty } from "@nestjs/swagger";
import { UpdateStudentData } from "../../domain/models";
import { Course } from "src/modules/courses/domain/models";
import { IsNotEmpty, IsOptional } from "class-validator";

export class UpdateStudentDto implements UpdateStudentData {
    @ApiProperty({ example: 'Jorge Amado' })
    @IsNotEmpty({ message: 'nome' })
    name: string;

    @ApiProperty({ example: [{
        "id": "2cbdc497-1775-43b2-9390-1a06765f6c93",
    }]})
    @IsOptional()
    courses?: Array<Course>;
}