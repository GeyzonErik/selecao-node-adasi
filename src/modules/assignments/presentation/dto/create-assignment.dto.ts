import { ApiProperty } from "@nestjs/swagger";
import { AssignmentData } from "../../domain/models";
import { IsNotEmpty } from "class-validator";

export class CreateAssignmentDTO implements AssignmentData {
    @ApiProperty({ example: 'Tarefa numero 5' })
    @IsNotEmpty()
    name: string;
}