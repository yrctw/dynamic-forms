import { Component } from '@angular/core';
import { DynamicFormInputComponent } from '@dynamic-forms/core';
import { CheckboxInput } from './checkbox-input';

@Component({
  selector: 'mat-dynamic-checkbox',
  templateUrl: './checkbox.component.html'
})
export class CheckboxComponent extends DynamicFormInputComponent<CheckboxInput> {}