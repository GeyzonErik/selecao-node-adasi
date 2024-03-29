import { Module } from "@nestjs/common";
import { PrismaModule } from "src/modules/prisma/prisma.module";
import { AssignmentsController } from "../presentation/controllers";
import { pgAssignmentRepository } from "../infra/repositories";
import { AssignmentRepository } from "../data/contracts";
import { CreateAssignment, DeleteAssignment, GetAllAssignments, GetAssignmentById, UpdateAssignment } from "../domain/usecases";
import { CreateAssignmentService, DeleteAssignmentService, GetAllAssignmentsService, GetAssignmentByIdService, UpdateAssignmentService } from "../data/services";

@Module({
    controllers: [AssignmentsController],
    providers: [
        { provide: AssignmentRepository, useClass: pgAssignmentRepository },
        
        { provide: CreateAssignment, useClass: CreateAssignmentService },
        { provide: GetAllAssignments, useClass: GetAllAssignmentsService },
        { provide: GetAssignmentById, useClass: GetAssignmentByIdService },
        { provide: UpdateAssignment, useClass: UpdateAssignmentService },
        { provide: DeleteAssignment, useClass: DeleteAssignmentService }
    ],
    imports: [PrismaModule]
})
export class AssignmentsModule {}