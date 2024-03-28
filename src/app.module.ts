import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './modules/prisma/prisma.module';
import { CoursesModule } from './modules/courses/main/courses.module';
import { StudentsModule } from './modules/students/main/students.module';

@Module({
  imports: [PrismaModule, CoursesModule, StudentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
