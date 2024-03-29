import { Body, Controller, Delete, Get, HttpStatus, Patch, Post, Res } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateStudent, GetStudents } from "../../domain/usecases";
import { Response } from "express";
import { createStudentDto } from "../dto";

@Controller('Students')
@ApiTags('Students')
export class StudentsController {
    constructor(
        private readonly createStudent: CreateStudent,
        private readonly getStudents: GetStudents
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

    @Get()
    async get(@Res() res: Response) {
        try {
            const students = await this.getStudents.execute()
            res.status(HttpStatus.OK).send(students)
        } catch(error) {
            throw error
        }
    }

    @Get(':cpf')
    async getByCpf() {}

    @Patch(':cpf')
    async update() {}

    @Delete()
    async delete() {}
}