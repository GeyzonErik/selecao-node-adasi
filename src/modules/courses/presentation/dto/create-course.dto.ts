import { ApiProperty } from "@nestjs/swagger";
import { CreateCourseData } from "../../domain/models";
import { IsNotEmpty } from "class-validator";

export class CreateCourseDTO implements CreateCourseData {
    @ApiProperty({example: 'NodeApi com NestJS'})
    @IsNotEmpty()
    name: string
}