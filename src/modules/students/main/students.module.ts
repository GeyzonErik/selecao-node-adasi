import { Module } from '@nestjs/common';
import { StudentsController } from '../presentation/controllers';
import { PrismaModule } from 'src/modules/prisma/prisma.module';
import { StudentRepository } from '../data/contracts';
import { pgStudentRepository } from '../infra/repositories';
import { CreateStudent, GetStudentByCpf, GetStudents, UpdateStudent } from '../domain/usecases';
import { CreateStudentService, GetStudentByCpfService, GetStudentsService, UpdateStudentService } from '../data/services';

@Module({
    controllers: [StudentsController],
    providers: [
        { provide: StudentRepository, useClass: pgStudentRepository },
        { provide: CreateStudent, useClass: CreateStudentService },
        { provide: GetStudents, useClass: GetStudentsService },
        { provide: GetStudentByCpf, useClass: GetStudentByCpfService },
        { provide: UpdateStudent, useClass: UpdateStudentService }
    ],
    imports: [PrismaModule]
})
export class StudentsModule {}
