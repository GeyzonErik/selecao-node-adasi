import { ApiProperty } from "@nestjs/swagger";
import { StudentData } from "../../domain/models";
import { Course, CourseData } from "src/modules/courses/domain/models";
import { IsNotEmpty, IsOptional } from "class-validator";
import { IsValidCPF } from "src/modules/chore/validation";

export class createStudentDto implements StudentData{
    @ApiProperty({ example: '589.867.560-48' })
    @IsValidCPF()
    @IsNotEmpty({ message: 'cpf' })
    cpf: string;

    @ApiProperty({ example: '2021456247201'})
    @IsNotEmpty({ message: 'matricula' })
    register: string;

    @ApiProperty({ example: 'Arnaldo Dias' })
    @IsNotEmpty({ message: 'nome' })
    name: string;

    @ApiProperty({ example: [{
        id: '[validCourseId]'
    }]})
    @IsOptional()
    courses?: Array<Course>;
}