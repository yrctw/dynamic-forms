import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DynamicFormLibraryService } from '../dynamic-form-library/dynamic-form-library.service';
import { DynamicFormValidationService } from '../dynamic-form-validation/dynamic-form-validation.service';
import { DynamicForm } from '../dynamic-form/dynamic-form';
import { DynamicFormDefinition } from '../dynamic-form/dynamic-form-definition';
import { DynamicFormGroup } from './dynamic-form-group';
import { DynamicFormGroupDefinition } from './dynamic-form-group-definition';
import { DynamicFormGroupComponent } from './dynamic-form-group.component';
import { DynamicFormGroupModule } from './dynamic-form-group.module';

describe('DynamicFormGroupComponent', () => {
  let fixture: ComponentFixture<DynamicFormGroupComponent>;
  let component: DynamicFormGroupComponent;
  let form: DynamicForm;
  let formGroup: DynamicFormGroup;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DynamicFormGroupModule
      ],
      providers: [
        {
          provide: DynamicFormLibraryService,
          useValue: new DynamicFormLibraryService({ name: 'test' })
        },
        DynamicFormValidationService
      ]
    });

    fixture = TestBed.createComponent(DynamicFormGroupComponent);
    component = fixture.componentInstance;

    form = new DynamicForm(<DynamicFormDefinition>{ elements: [] } , {});
    formGroup = new DynamicFormGroup(form, form, <DynamicFormGroupDefinition>{
      id: 'id',
      key: 'key',
      index: 1,
      template: {
        label: 'label'
      },
      elements: []
    });
    component.field = formGroup;

    fixture.detectChanges();
  }));

  it('creates component', () => {
    expect(component).toBeDefined();
    expect(component.id).toBe('id');
    expect(component.key).toBe('key');
    expect(component.index).toBe(1);
    expect(component.path).toBe('key');
    expect(component.template).toBeDefined();
    expect(component.control).toBeDefined();
    expect(component.elements).toEqual([]);
  });

  it('creates component template', () => {
    const formGroupDebugElement = fixture.debugElement.query(By.css('div.dynamic-form-group'));
    const formGroupLabelDebugElement = formGroupDebugElement.query(By.css('div.dynamic-form-group-label'));
    const formGroupElement = <HTMLElement>formGroupDebugElement.nativeElement;
    const formGroupLabelElement = <HTMLElement>formGroupLabelDebugElement.nativeElement;

    expect(formGroupElement).toBeDefined();
    expect(formGroupLabelElement).toBeDefined();
  });

  it('hides dynamic form group label if not defined', () => {
    component.template.label = null;
    fixture.detectChanges();

    const formGroupDebugElement = fixture.debugElement.query(By.css('div.dynamic-form-group'));
    const formGroupLabelDebugElement = formGroupDebugElement.query(By.css('div.dynamic-form-group-label'));

    expect(formGroupLabelDebugElement).toBeNull();
  });

  it('hides dynamic form group label if set hidden', () => {
    component.template.labelHidden = true;
    fixture.detectChanges();

    const formGroupDebugElement = fixture.debugElement.query(By.css('div.dynamic-form-group'));
    const formGroupLabelDebugElement = formGroupDebugElement.query(By.css('div.dynamic-form-group-label'));

    expect(formGroupLabelDebugElement).toBeNull();
  });

  it('sets class name for dynamic form group label', () => {
    component.template.classNameLabel = 'class-name-label';
    fixture.detectChanges();

    const formGroupDebugElement = fixture.debugElement.query(By.css('div.dynamic-form-group'));
    const formGroupLabelDebugElement = formGroupDebugElement.query(By.css('div.dynamic-form-group-label.class-name-label'));

    expect(formGroupLabelDebugElement).toBeDefined();
  });

  it('sets dynamic form group to hidden', () => {
    const formGroupDebugElement = fixture.debugElement.query(By.css('div.dynamic-form-group'));
    const formGroupElement = <HTMLElement>formGroupDebugElement.nativeElement;

    expect(formGroupElement.className).toBe('dynamic-form-group');

    component.template.hidden = true;
    fixture.detectChanges();

    expect(formGroupElement.className).toBe('dynamic-form-group hidden');
  });

  it('sets dynamic form group to readonly', () => {
    const formGroupDebugElement = fixture.debugElement.query(By.css('div.dynamic-form-group'));
    const formGroupElement = <HTMLElement>formGroupDebugElement.nativeElement;

    expect(formGroupElement.className).toBe('dynamic-form-group');

    component.template.readonly = true;
    fixture.detectChanges();

    expect(formGroupElement.className).toBe('dynamic-form-group readonly');
  });

  it('sets class name of dynamic form group', () => {
    const formGroupDebugElement = fixture.debugElement.query(By.css('div.dynamic-form-group'));
    const formGroupElement = <HTMLElement>formGroupDebugElement.nativeElement;

    expect(formGroupElement.className).toBe('dynamic-form-group');

    component.template.className = 'className1 className2';
    fixture.detectChanges();

    expect(formGroupElement.className).toBe('dynamic-form-group className1 className2');

    component.template.className = null;
    fixture.detectChanges();

    expect(formGroupElement.className).toBe('dynamic-form-group');
  });
});
