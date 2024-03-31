import { WorkData } from "../models";

export abstract class CreateWork {
    execute: (workData: WorkData) => Promise<void>
}