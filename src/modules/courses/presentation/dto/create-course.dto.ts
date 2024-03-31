import { ApiProperty } from "@nestjs/swagger";
import { CourseData } from "../../domain/models";
import { IsNotEmpty } from "class-validator";

export class CreateCourseDTO implements CourseData {
    @ApiProperty({example: 'NodeApi com NestJS'})
    @IsNotEmpty({ message: 'nome' })
    name: string
}