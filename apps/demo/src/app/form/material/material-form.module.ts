import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamicFormIconModule, DynamicFormThemeModule } from '@dynamic-forms/core';
import { DynamicFormMarkdownModule } from '@dynamic-forms/markdown';
import { MatDynamicFormsModule } from '@dynamic-forms/material';
import { v4 } from 'uuid';
import { DynamicFormExtensionsModule } from '../dynamic-form-extensions.module';
import { FormSubmitDialogModule } from '../form-submit-dialog.module';
import { MaterialFormComponent } from './material-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormSubmitDialogModule,
    DynamicFormIconModule.withIcons({
      icons: {
        submit: 'send',
        validate: 'error',
        reset: 'delete',
        resetDefault: 'restore_page',
        push: 'add',
        pop: 'remove',
        remove: 'clear',
        clear: 'clear',
        moveDown: 'arrow_downward',
        moveUp: 'arrow_upward',
        register: 'add',
        maximizeModal: 'fullscreen',
        minimizeModal: 'fullscreen_exit',
      },
      libraryName: 'material',
    }),
    DynamicFormThemeModule.withColors({
      colors: {
        secondary: 'accent',
        danger: 'warn',
        warning: 'warn',
        inputAction: 'none',
      },
      libraryName: 'material',
    }),
    DynamicFormExtensionsModule,
    DynamicFormMarkdownModule,
    MatDynamicFormsModule.forRoot({
      theme: 'material',
      idBuilder: { createId: () => v4() },
    }),
  ],
  declarations: [MaterialFormComponent],
  exports: [MaterialFormComponent],
})
export class MaterialFormModule {}
