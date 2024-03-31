import { ApiProperty } from "@nestjs/swagger";
import { StudentData } from "../../domain/models";
import { Course, CourseData } from "src/modules/courses/domain/models";
import { IsNotEmpty, IsOptional, MaxLength, MinLength } from "class-validator";
import { IsValidCPF } from "src/modules/chore/validation";

export class createStudentDto implements StudentData{
    @ApiProperty({ example: '589.867.560-48' })
    @IsValidCPF()
    @MaxLength(18, { message: 'Campo CPF/CNPJ não deve ultrapassar 18 caracteres' })
    @MinLength(14, { message: 'Campo CPF/CNPJ não deve ser menor que 14 caracteres' })
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