export abstract class DeleteStudent {
    execute: (studentCpf: string) => Promise<void>;
}