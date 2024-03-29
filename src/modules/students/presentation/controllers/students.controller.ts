import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Res } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateStudent, GetStudentByCpf, GetStudents, UpdateStudent } from "../../domain/usecases";
import { Response } from "express";
import { createStudentDto } from "../dto";
import { UpdateStudentDto } from "../dto/update-student.dto";

@Controller('Students')
@ApiTags('Students')
export class StudentsController {
    constructor(
        private readonly createStudent: CreateStudent,
        private readonly getStudents: GetStudents,
        private readonly getStudentByCpf: GetStudentByCpf,
        private readonly updateStudent: UpdateStudent
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
    async getByCpf(@Res() res: Response, @Param('cpf') cpf: string) {
        try {
            const student = await this.getStudentByCpf.execute(cpf);
            res.status(HttpStatus.OK).send(student);
        } catch(error) {
            throw error
        }
    }

    @Patch(':cpf')
    async update(@Res() res: Response, @Param('cpf') cpf: string, @Body() updateStudentDto: UpdateStudentDto) {
        try {
            const updatedStudent = await this.updateStudent.execute(cpf, updateStudentDto)
            res.status(HttpStatus.OK).send(updatedStudent);
        } catch(error) {
            throw(error)
        }
    }

    @Delete(':cpf')
    async delete() {}
}