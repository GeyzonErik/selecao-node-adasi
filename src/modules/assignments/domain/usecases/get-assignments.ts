import { Assignment } from "../models";

export abstract class GetAllAssignments {
    execute: () => Promise<Array<Assignment>>
}