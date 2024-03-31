import { Module } from "@nestjs/common";
import { PrismaModule } from "src/modules/prisma/prisma.module";
import { WorksController } from "../presentation/controllers";
import { pgWorkRepository } from "../infra/repositories/pg-works-repository";
import { WorkRepository } from "../data/contracts";
import { CreateWork, DeleteWork, GetAllWorks, GetWorkById, UpdateWork } from "../domain/usecases";
import { CreateWorkService, DeleteWorkService, GetAllWorksService, GetWorkByIdService, UpdateWorkService } from "../data/services";

@Module({
    controllers: [WorksController],
    providers: [
        { provide: WorkRepository, useClass: pgWorkRepository },
        
        { provide: CreateWork, useClass: CreateWorkService },
        { provide: GetAllWorks, useClass: GetAllWorksService },
        { provide: GetWorkById, useClass: GetWorkByIdService },
        { provide: UpdateWork, useClass: UpdateWorkService },
        { provide: DeleteWork, useClass: DeleteWorkService }
    ],
    imports: [PrismaModule]
})
export class WorksModule {}