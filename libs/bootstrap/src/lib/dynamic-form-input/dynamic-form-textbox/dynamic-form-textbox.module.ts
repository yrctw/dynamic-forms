import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormConfig, DynamicFormConfigModule } from '@dynamic-forms/core';
import { BsDynamicFormTextboxComponent } from './dynamic-form-textbox.component';

export const bsDynamicFormTextboxConfig: DynamicFormConfig = {
  library: 'bootstrap',
  inputConfig: {
    types: [
      { type: 'textbox', component: BsDynamicFormTextboxComponent, wrappers: [ 'label', 'hints', 'errors' ] }
    ]
  }
};

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicFormConfigModule.forChild(bsDynamicFormTextboxConfig)
  ],
  declarations: [
    BsDynamicFormTextboxComponent
  ],
  exports: [
    DynamicFormConfigModule,
    BsDynamicFormTextboxComponent
  ],
  entryComponents: [
    BsDynamicFormTextboxComponent
  ]
})
export class BsDynamicFormTextboxModule {}
