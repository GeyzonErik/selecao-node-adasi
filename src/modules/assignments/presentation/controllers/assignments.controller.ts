import { BadRequestException, Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Res } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Response } from "express";
import { CreateAssignmentDTO, UpdateAssignmentDto } from "../dto";
import { CreateAssignment, DeleteAssignment, GetAllAssignments, GetAssignmentById, UpdateAssignment } from "../../domain/usecases";
import { RegisterNotFound } from "src/modules/chore/errors";

@Controller('Assignments')
@ApiTags('Assignments')
export class AssignmentsController {
    constructor(
        private readonly createAssignment: CreateAssignment,
        private readonly getAllAssignment: GetAllAssignments,
        private readonly getAssignmentById: GetAssignmentById,
        private readonly updateAssignment: UpdateAssignment,
        private readonly deleteAssignment: DeleteAssignment
    ) {}

    @Post()
    async create(@Res() res: Response, @Body() createAssignmentDTO: CreateAssignmentDTO) {
        try{
            await this.createAssignment.execute(createAssignmentDTO);
            res.status(HttpStatus.CREATED).send()
        } catch(error) {
            throw error
        }
    }

    @Get()
    async get(@Res() res: Response) {
        try {
            const assignments = await this.getAllAssignment.execute();
            res.status(HttpStatus.OK).send(assignments)
        } catch(error) {
            throw error
        }
    }

    @Get(':id')
    async getById(@Res() res: Response, @Param('id') id: string) {
        try {
            const assignment = await this.getAssignmentById.execute(id)
            res.status(HttpStatus.OK).send(assignment)
        } catch(error) {
            if(error instanceof RegisterNotFound) {
                throw new BadRequestException(error.message)
            }
            throw error
        }
    }

    @Patch(':id')
    async update(@Res() res: Response, @Param('id') id: string, @Body() updateAssignmentDto: UpdateAssignmentDto) {
        try{
            const updatedAssignment = await this.updateAssignment.execute(id, updateAssignmentDto);
            res.status(HttpStatus.OK).send(updatedAssignment);
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
            await this.deleteAssignment.execute(id);
            res.status(HttpStatus.OK).send()
        } catch(error) {
            if(error instanceof RegisterNotFound) {
                throw new BadRequestException(error.message)
            }
            throw error
        }
    }
}