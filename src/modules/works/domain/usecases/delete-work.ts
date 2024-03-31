export abstract class DeleteWork {
    execute: (workId: string) => Promise<void>
}