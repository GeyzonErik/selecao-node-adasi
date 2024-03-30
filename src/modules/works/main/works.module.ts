import { Module } from "@nestjs/common";
import { PrismaModule } from "src/modules/prisma/prisma.module";
import { WorksController } from "../presentation/controllers";

@Module({
    controllers: [WorksController],
    imports: [PrismaModule]
})
export class WorksModule {}