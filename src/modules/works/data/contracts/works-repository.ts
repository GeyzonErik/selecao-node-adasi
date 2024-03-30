import { Work, WorkData } from "../../domain/models";

export abstract class WorkRepository {
    create: (workData: WorkData) => Promise<void>
    get: () => Promise<Array<Work>>
    getById: (workId: string) => Promise<Work>
    update: (workId: string, workData: WorkData) => Promise<Work>
    delete: (workId: string) => Promise<void>
}