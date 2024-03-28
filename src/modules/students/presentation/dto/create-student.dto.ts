import { ApiProperty } from "@nestjs/swagger";
import { StudentData } from "../../domain/models";
import { Course, CourseData } from "src/modules/courses/domain/models";
import { IsNotEmpty, IsOptional } from "class-validator";

export class createStudentDto implements StudentData{
    @ApiProperty({ example: '589.867.560-48' })
    @IsNotEmpty()
    cpf: string;

    @ApiProperty({ example: '2021456247201'})
    @IsNotEmpty()
    register: string;

    @ApiProperty({ example: 'Arnaldo Dias' })
    @IsNotEmpty()
    name: string;

    @ApiProperty({ example: [{
        id: '9ae2cc4b-b574-48ca-a516-780c68902ec7',
        name: 'NodeApi com NestJS Avançado' 
    }]})
    @IsOptional()
    course?: Array<Course>;
}