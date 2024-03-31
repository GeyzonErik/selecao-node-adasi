import { Work } from "../models";

export abstract class GetAllWorks {
    execute: () => Promise<Array<Work>>
}