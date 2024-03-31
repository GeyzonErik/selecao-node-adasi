import { BadRequestException, Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Res } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Response } from "express";
import { CreateCourseDTO, UpdateCourseDto } from "../dto";
import { CreateCourse, DeleteCourse, GetCourseById, GetCourses, UpdateCourse } from "../../domain/usecases";
import { RegisterNotFound } from "src/modules/chore/errors";

@Controller('Courses')
@ApiTags('Courses')
export class CoursesController {
    constructor(
        private readonly createCourse: CreateCourse,
        private readonly getCourses: GetCourses,
        private readonly getCourseById: GetCourseById,
        private readonly updateCourse: UpdateCourse,
        private readonly deleteCourse: DeleteCourse
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
    async get(@Res() res: Response) {
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
            if(error instanceof RegisterNotFound) {
                throw new BadRequestException(error.message)
            }
            throw error
        }
    }

    @Patch(':id')
    async update(@Res() res: Response, @Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
        try {
            const updatedCourse = await this.updateCourse.execute(id, updateCourseDto);
            res.status(HttpStatus.OK).send(updatedCourse)
        } catch(error) {
            if(error instanceof RegisterNotFound) {
                throw new BadRequestException(error.message)
            }
            throw error
        }
    }

    @Delete(':id')
    async delete(@Res() res: Response, @Param('id') id: string) {
        try {
            await this.deleteCourse.execute(id);
            res.status(HttpStatus.OK).send()
        } catch(error) {
            if(error instanceof RegisterNotFound) {
                throw new BadRequestException(error.message)
            }
            throw error
        }
    }
}