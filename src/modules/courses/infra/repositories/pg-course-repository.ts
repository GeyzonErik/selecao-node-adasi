import { Injectable } from "@nestjs/common";
import { CourseRepository } from "../../data/contracts";
import { PrismaService } from "src/modules/prisma/prisma.service";
import { Course } from "../../domain/models";

@Injectable()
export class pgCourseRepository implements CourseRepository {
    constructor( private prismaClient: PrismaService ) { }

    async create(course: Course) {
        await this.prismaClient.course.create({
            data: {
                ...course
            }
        })
    }

    async getCourses() {
        const courses = await this.prismaClient.course.findMany();
        return courses;
    }

    async getCourseById(courseId) {
        const course = await this.prismaClient.course.findUnique({
            where: {
                id: courseId
            },
            include: {
                students: true
            }
        })

        return course
    }

    async updateCourse(courseId: string, course: Course) {
        const updatedCourse = await this.prismaClient.course.update({
            where: {
                id: courseId
            },
            data: {
                ...course
            }

        })

        return updatedCourse
    }

    async deleteCourse(courseId: string) {
        await this.prismaClient.course.delete({
            where: {
                id: courseId
            }
        })
    }
}