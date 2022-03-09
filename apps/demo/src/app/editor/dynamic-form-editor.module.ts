import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MonacoEditorModule } from '../monaco/monaco-editor.module';
import { DynamicFormEditorComponent } from './dynamic-form-editor.component';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatTabsModule,
    MatButtonModule,
    MonacoEditorModule
  ],
  declarations: [
    DynamicFormEditorComponent
  ],
  exports: [
    CommonModule,
    MatDialogModule,
    MatTabsModule,
    MatButtonModule,
    DynamicFormEditorComponent
  ]
})
export class DynamicFormEditorModule {}
