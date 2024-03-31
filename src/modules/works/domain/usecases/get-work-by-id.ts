import { Work } from "../models";

export abstract class GetWorkById {
    execute: (workId: string) => Promise<Work>
}