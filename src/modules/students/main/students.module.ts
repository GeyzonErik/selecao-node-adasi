import { Module } from '@nestjs/common';
import { StudentsController } from '../presentation/controllers';
import { PrismaModule } from 'src/modules/prisma/prisma.module';
import { StudentRepository } from '../data/contracts';
import { pgStudentRepository } from '../infra/repositories';
import { CreateStudent } from '../domain/usecases';
import { CreateStudentService } from '../data/services/create-student.service';
import { CourseRepository } from 'src/modules/courses/data/contracts';
import { pgCourseRepository } from 'src/modules/courses/infra/repositories';

@Module({
    controllers: [StudentsController],
    providers: [
        { provide: StudentRepository, useClass: pgStudentRepository },
        { provide: CreateStudent, useClass: CreateStudentService},
        
        { provide: CourseRepository, useClass: pgCourseRepository}
    ],
    imports: [PrismaModule]
})
export class StudentsModule {}
