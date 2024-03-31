import { ToleranceError } from "../errors"

export function ValidTolerance(appointmentStart: Date, startHour: Date) {
    const diferenceInMinutes = (startHour.getTime() - appointmentStart.getTime()) / (1000 * 60)

    if(diferenceInMinutes > 15) {
        throw new ToleranceError()
    }

    if(diferenceInMinutes < -15) {
        throw new ToleranceError()
    }
}