export class HourExtrapolatedError extends Error {
    constructor() {
        super('Duração de atividade não pode exceder 6 horas')
        this.name = 'HourExtrapolatedError'
    }
}