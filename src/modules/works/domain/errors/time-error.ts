export class HourError extends Error {
    constructor() {
        super(`Hora final não pode ser menor ou igual que a inicial`);
        this.name = 'HourError'
    }
}