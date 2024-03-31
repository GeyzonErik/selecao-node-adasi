export class CpfAlreadyInUse extends Error {
    constructor() {
        super(`Cpf já está sendo utilizado`);
        this.name = 'CpfAlreadyInUse';
    }
}