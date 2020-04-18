import { Validators } from '@angular/forms';
import { dynamicFormLibrary, DynamicFormLibraryName } from '../dynamic-form-library/dynamic-form-library';
import { DynamicFormControlValidatorFactory, DynamicFormControlValidatorFn } from './dynamic-form-control-validator';

export interface DynamicFormControlValidatorType {
  type: string;
  factory: DynamicFormControlValidatorFactory;
  libraryName: DynamicFormLibraryName;
}

export function dynamicFormControlRequiredValidatorFn(_: any): DynamicFormControlValidatorFn {
  return Validators.required;
}

export const dynamicFormControlRequiredValidatorType: DynamicFormControlValidatorType = {
  type: 'required',
  factory: dynamicFormControlRequiredValidatorFn,
  libraryName: dynamicFormLibrary.name
};

export function dynamicFormControlEmailValidatorFn(_: any): DynamicFormControlValidatorFn {
  return Validators.email;
}

export const dynamicFormControlEmailValidatorType: DynamicFormControlValidatorType = {
  type: 'email',
  factory: dynamicFormControlEmailValidatorFn,
  libraryName: dynamicFormLibrary.name
};

export function dynamicFormControlPatternValidatorFn(pattern?: string | RegExp): DynamicFormControlValidatorFn {
  return pattern ? Validators.pattern(pattern) : undefined;
}

export const dynamicFormControlPatternValidatorType: DynamicFormControlValidatorType = {
  type: 'pattern',
  factory: dynamicFormControlPatternValidatorFn,
  libraryName: dynamicFormLibrary.name
};

export function dynamicFormControlMinValidatorFn(min?: number): DynamicFormControlValidatorFn {
  return Number.isFinite(min) ? Validators.min(min) : undefined;
}

export const dynamicFormControlMinValidatorType: DynamicFormControlValidatorType = {
  type: 'min',
  factory: dynamicFormControlMinValidatorFn,
  libraryName: dynamicFormLibrary.name
};

export function dynamicFormControlMaxValidatorFn(max?: number): DynamicFormControlValidatorFn {
  return Number.isFinite(max) ? Validators.max(max) : undefined;
}

export const dynamicFormControlMaxValidatorType: DynamicFormControlValidatorType = {
  type: 'max',
  factory: dynamicFormControlMaxValidatorFn,
  libraryName: dynamicFormLibrary.name
};

export function dynamicFormControlMinLengthValidatorFn(minLength?: number): DynamicFormControlValidatorFn {
  return Number.isFinite(minLength) ? Validators.minLength(minLength) : undefined;
}

export const dynamicFormControlMinLengthValidatorType: DynamicFormControlValidatorType = {
  type: 'minLength',
  factory: dynamicFormControlMinLengthValidatorFn,
  libraryName: dynamicFormLibrary.name
};

export function dynamicFormControlMaxLengthValidatorFn(maxLength?: number): DynamicFormControlValidatorFn {
  return Number.isFinite(maxLength) ? Validators.maxLength(maxLength) : undefined;
}

export const dynamicFormControlMaxLengthValidatorType: DynamicFormControlValidatorType = {
  type: 'maxLength',
  factory: dynamicFormControlMaxLengthValidatorFn,
  libraryName: dynamicFormLibrary.name
};

export const dynamicFormControlValidatorTypes: DynamicFormControlValidatorType[] = [
  dynamicFormControlRequiredValidatorType,
  dynamicFormControlEmailValidatorType,
  dynamicFormControlPatternValidatorType,
  dynamicFormControlMinValidatorType,
  dynamicFormControlMaxValidatorType,
  dynamicFormControlMinLengthValidatorType,
  dynamicFormControlMaxLengthValidatorType
];
