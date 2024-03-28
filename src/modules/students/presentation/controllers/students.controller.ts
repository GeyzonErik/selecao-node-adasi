import { Body, Controller, HttpStatus, Post, Res } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateStudent } from "../../domain/usecases";
import { Response } from "express";
import { createStudentDto } from "../dto";

@Controller('Students')
@ApiTags('Students')
export class StudentsController {
    constructor(
        private readonly createStudent: CreateStudent
    ) { }

    @Post()
    async create(@Res() res: Response, @Body() createStudentDto: createStudentDto) {
        try {
            await this.createStudent.execute(createStudentDto)
            res.status(HttpStatus.CREATED).send()
        } catch(error) {
            throw error
        }
    }
}