import { HourError, HourExtrapolatedError, ToleranceError } from "../errors";

export function validTime(startHour: Date, endHour: Date) {
    const diferenceInHours = (endHour.getTime() - startHour.getTime()) / (1000 * 60 * 60);
    
    if(endHour <= startHour) {
        throw new HourError();
    }    

    if(diferenceInHours > 6) {
        throw new HourExtrapolatedError()
    }
}