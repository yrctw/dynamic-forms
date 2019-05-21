import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicFormsBootstrapModule } from '@dynamic-forms/bootstrap';
import { DynamicFormExampleModule } from '../dynamic-form-example.module';
import { DynamicFormTemplateResolver } from '../dynamic-form-template.resolver';
import { BootstrapExamplesComponent } from './bootstrap-examples.component';

@NgModule({
  imports: [
    DynamicFormExampleModule,
    DynamicFormsBootstrapModule.forRoot(),
    RouterModule.forChild([
      {
        path: ':templateId',
        component: BootstrapExamplesComponent,
        resolve: {
          template: DynamicFormTemplateResolver
        }
      }
    ])
  ],
  declarations: [
    BootstrapExamplesComponent
  ],
  exports: [
    RouterModule
  ]
})
export class BootstrapExamplesModule {}