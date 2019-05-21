import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DynamicForm, DynamicFormControl, DynamicFormControlTemplate, DynamicFormRadio,
  DynamicFormTemplate } from '@dynamic-forms/core';
import { DynamicFormRadioComponent } from './dynamic-form-radio.component';
import { DynamicFormRadioModule } from './dynamic-form-radio.module';

describe('DynamicFormRadioComponent', () => {
  let fixture: ComponentFixture<DynamicFormRadioComponent>;
  let component: DynamicFormRadioComponent;
  let form: DynamicForm;
  let template: DynamicFormControlTemplate<DynamicFormRadio>;
  let formControl: DynamicFormControl<DynamicFormRadio>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DynamicFormRadioModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicFormRadioComponent);
    component = fixture.componentInstance;

    form = new DynamicForm(<DynamicFormTemplate>{}, {});
    template = <DynamicFormControlTemplate<DynamicFormRadio>>{
      key: 'key',
      input: {
        options: [
          { value: 'value1', label: 'label1' },
          { value: 'value2', label: 'label2' }
        ]
      }
    };
    formControl = new DynamicFormControl<DynamicFormRadio>(form, form, template);

    component.field = formControl;

    fixture.detectChanges();
  }));

  it('creates component', () => {
    expect(component).toBeDefined();
    expect(component.id).toBe('key');
  });

  it('creates component template', () => {
    const radioDebugElement = fixture.debugElement.query(By.css('mat-radio-group'));
    const inputDebugElements = radioDebugElement.queryAll(By.css('input.mat-radio-input'));
    const labelDebugElements = radioDebugElement.queryAll(By.css('div.mat-radio-label-content'));
    const radioElement = <HTMLElement>radioDebugElement.nativeElement;
    const inputElements = <HTMLInputElement[]>inputDebugElements.map(elem => elem.nativeElement);
    const labelElements = <HTMLDivElement[]>labelDebugElements.map(elem => elem.nativeElement);

    expect(radioElement).toBeDefined();
    expect(inputElements[0].id).toBe(`key-0-input`);
    expect(inputElements[0].type).toBe('radio');
    expect(labelElements[0].innerText).toBe('label1');
    expect(inputElements[1].id).toBe('key-1-input');
    expect(inputElements[1].type).toBe('radio');
    expect(labelElements[1].innerText).toBe('label2');
  });

  it('sets dynamic form control to readonly', () => {
    const radioDebugElement = fixture.debugElement.query(By.css('mat-radio-group'));
    const radioElement = <HTMLElement>radioDebugElement.nativeElement;

    expect(radioElement.className).not.toContain('readonly');

    component.template.readonly = true;
    fixture.detectChanges();

    expect(radioElement.className).toContain('readonly');
  });
});