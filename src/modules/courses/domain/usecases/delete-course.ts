export abstract class DeleteCourse {
    execute: (courseId: string) => Promise<void>
}