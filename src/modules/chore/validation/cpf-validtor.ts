import { ValidationArguments, ValidationOptions, registerDecorator } from "class-validator";
import isValidCpf from "../resources/valid-cpf";

export function IsValidCPF() {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'isValidCPF',
            target: object.constructor,
            propertyName: propertyName,
            validator: {
                validate(cpf: string, args: ValidationArguments) {
                    return isValidCpf(cpf)
                }
            },
        })
    }
}