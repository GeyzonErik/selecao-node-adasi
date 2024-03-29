import { Module } from '@nestjs/common';
import { StudentsController } from '../presentation/controllers';
import { PrismaModule } from 'src/modules/prisma/prisma.module';
import { StudentRepository } from '../data/contracts';
import { pgStudentRepository } from '../infra/repositories';
import { CreateStudent, GetStudents } from '../domain/usecases';
import { CreateStudentService, GetStudentsService } from '../data/services';

@Module({
    controllers: [StudentsController],
    providers: [
        { provide: StudentRepository, useClass: pgStudentRepository },
        { provide: CreateStudent, useClass: CreateStudentService },
        { provide: GetStudents, useClass: GetStudentsService }
    ],
    imports: [PrismaModule]
})
export class StudentsModule {}
