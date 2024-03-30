import { Controller, Delete, Get, Patch, Post, Res } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Response } from "express";

@Controller('Works')
@ApiTags('Works')
export class WorksController {
    constructor() {}

    @Post()
    async create(@Res() res: Response) {}

    @Get()
    async get(@Res() res: Response) {}

    @Get(':id')
    async getById(@Res() res: Response) {}

    @Patch(':id')
    async update(@Res() res: Response) {}

    @Delete(':id')
    async delete(@Res() res: Response) {}
}