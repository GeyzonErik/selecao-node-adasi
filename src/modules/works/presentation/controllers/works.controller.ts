import { BadRequestException, Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Res } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Response } from "express";
import { CreateWork, DeleteWork, GetAllWorks, GetWorkById, UpdateWork } from "../../domain/usecases";
import { CreateWorkDto, UpdateWorkDto } from "../dto";
import { HourError, HourExtrapolatedError, ToleranceError } from "../../domain/errors";
import { RegisterNotFound } from "src/modules/chore/errors";

@Controller('Works')
@ApiTags('Works')
export class WorksController {
    constructor(
        private readonly createWork: CreateWork,
        private readonly getWorks: GetAllWorks,
        private readonly getWorkById: GetWorkById,
        private readonly updateWork: UpdateWork,
        private readonly deleteWork: DeleteWork
    ) {}

    @Post()
    async create(@Res() res: Response, @Body() createWorkDto: CreateWorkDto) {
        try {
            await this.createWork.execute(createWorkDto);
            res.status(HttpStatus.CREATED).send();
        } catch(error) {
            if(error instanceof HourError) {
                throw new BadRequestException(error.message)
            }
            if(error instanceof HourExtrapolatedError) {
                throw new BadRequestException(error.message)
            }
            if(error instanceof ToleranceError) {
                throw new BadRequestException(error.message)
            }
            if(error instanceof RegisterNotFound) {
                throw new BadRequestException(error.message)
            }
            throw error;
        }
    }

    @Get()
    async get(@Res() res: Response) {
        try {
            const works = await this.getWorks.execute();
            res.status(HttpStatus.OK).send(works);
        } catch(error) {
            throw error;
        }
    }

    @Get(':id')
    async getById(@Res() res: Response, @Param('id') id: string) {
        try {
            const work = await this.getWorkById.execute(id);
            res.status(HttpStatus.OK).send(work);
        } catch(error) {
            if(error instanceof RegisterNotFound) {
                throw new BadRequestException(error.message)
            }
            throw error;
        }
    }

    @Patch(':id')
    async update(@Res() res: Response, @Param('id') id: string, @Body() updateWorkDto: UpdateWorkDto) {
        try {
            const updatedWork = await this.updateWork.execute(id, updateWorkDto);
            res.status(HttpStatus.OK).send(updatedWork);
        } catch(error) {
            if(error instanceof HourError) {
                throw new BadRequestException(error.message)
            }
            if(error instanceof HourExtrapolatedError) {
                throw new BadRequestException(error.message)
            }
            if(error instanceof ToleranceError) {
                throw new BadRequestException(error.message)
            }
            if(error instanceof RegisterNotFound) {
                throw new BadRequestException(error.message)
            }
            throw error
        }
    }

    @Delete(':id')
    async delete(@Res() res: Response, @Param('id') id: string) {
        try {
            await this.deleteWork.execute(id);
            res.status(HttpStatus.OK).send();
        } catch(error) {
            if(error instanceof RegisterNotFound) {
                throw new BadRequestException(error.message)
            }
            throw error
        }
    }
}