import { Body, Controller, Get, HttpStatus, Param, Post, Res } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Response } from "express";
import { CreateCourseDTO } from "../dto";
import { CreateCourse, GetCourseById, GetCourses } from "../../domain/usecases";

@Controller('Courses')
@ApiTags('Courses')
export class CoursesController {
    constructor(
        private readonly createCourse: CreateCourse,
        private readonly getCourses: GetCourses,
        private readonly getCourseById: GetCourseById
    ) {}

    @Post()
    async create(@Res() res: Response, @Body() createCourseDTO: CreateCourseDTO) {
        try {
            await this.createCourse.execute(createCourseDTO);
            res.status(HttpStatus.CREATED).send() 
        } catch(error) {
            throw error;
        }
    }

    @Get()
    async getAllCourses(@Res() res: Response) {
        try {
            const courses = await this.getCourses.execute();
            res.status(HttpStatus.OK).send(courses);
        } catch(error) {
            throw error
        }
    }

    @Get(':id')
    async getCourse(@Res() res: Response, @Param('id') id: string) {
        try {
            const course = await this.getCourseById.execute(id);
            res.status(HttpStatus.OK).send(course)
        } catch(error) {
            throw error
        }
    }
}