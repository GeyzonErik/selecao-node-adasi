export class RegisterInUse extends Error {
    constructor(field: string) {
        super(`Registro de ${field} já existente`);
        this.name = 'RegisterInUse'
    }
}