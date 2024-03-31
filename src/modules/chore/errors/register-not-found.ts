export class RegisterNotFound extends Error {
    constructor(field: string) {
        super(`Registro de ${field} não encontrado`);
        this.name = 'RegisterNotFound'
    }
}