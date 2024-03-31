import { UpdateWorkData, Work } from "../models";

export abstract class UpdateWork {
    execute: (workId: string, updateWorkData: UpdateWorkData) => Promise<Work>
}