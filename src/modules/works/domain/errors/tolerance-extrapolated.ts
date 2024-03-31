export class ToleranceError extends Error {
    constructor() {
        super('Tolerancia de 15 minutos excedida')
        this.name = 'ToleranceError'
    }
}