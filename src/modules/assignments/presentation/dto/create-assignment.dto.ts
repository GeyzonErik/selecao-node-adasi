import { ApiProperty } from "@nestjs/swagger";
import { AssignmentData } from "../../domain/models";
import { IsNotEmpty, MinLength } from "class-validator";

export class CreateAssignmentDTO implements AssignmentData {
    @ApiProperty({ example: 'Tarefa numero 5' })
    @MinLength(4, { message: 'Campo nome não deve conter menos que 4 caracteres' })
    @IsNotEmpty({ message: 'nome' })
    name: string;
}