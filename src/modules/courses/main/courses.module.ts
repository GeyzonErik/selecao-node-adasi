import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/modules/prisma/prisma.module';
import { CoursesController } from '../presentation/controllers';
import { CourseRepository } from '../data/contracts';
import { pgCourseRepository } from '../infra/repositories';
import { CreateCourse, DeleteCourse, GetCourseById, GetCourses, UpdateCourse } from '../domain/usecases';
import { CreateCourseService, DeleteCourseService, GetCourseByIdService, GetCoursesService, UpdateCourseService } from '../data/services';

@Module({
    controllers: [CoursesController],
    providers:[
        { provide: CourseRepository, useClass: pgCourseRepository },
        { provide: CreateCourse, useClass: CreateCourseService },
        { provide: GetCourses, useClass: GetCoursesService },
        { provide: GetCourseById, useClass: GetCourseByIdService },
        { provide: UpdateCourse, useClass: UpdateCourseService },
        { provide: DeleteCourse, useClass: DeleteCourseService }
    ],
    imports: [PrismaModule],
})
export class CoursesModule {}
