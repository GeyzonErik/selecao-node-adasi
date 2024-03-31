import { BadRequestException } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { ErrorMessages } from '../i18n';

export function ValidationFilter(validationError: ValidationError[]): BadRequestException {
  const error = validationError[0] 
  const constraint = Object.keys(error.constraints)[0]
  let message = constraint ? ErrorMessages[constraint] : ErrorMessages.internalError;

  if(message && message.includes('{0}')) {
    message = message.replace('{0}', error.constraints[constraint])
  }

  return new BadRequestException(message)
}