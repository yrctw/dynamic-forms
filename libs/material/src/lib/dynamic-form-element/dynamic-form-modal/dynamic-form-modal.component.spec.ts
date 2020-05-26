import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicFormLibraryService, DynamicFormModal, DynamicFormModalDefinition } from '@dynamic-forms/core';
import { MatDynamicFormModalComponent } from './dynamic-form-modal.component';
import { MatDynamicFormModalModule } from './dynamic-form-modal.module';

describe('MatDynamicFormModalComponent', () => {
  let fixture: ComponentFixture<MatDynamicFormModalComponent>;
  let component: MatDynamicFormModalComponent;
  let modal: DynamicFormModal;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MatDynamicFormModalModule
      ],
      providers: [
        {
          provide: DynamicFormLibraryService,
          useValue: new DynamicFormLibraryService({ name: 'test' })
        }
      ]
    });

    fixture = TestBed.createComponent(MatDynamicFormModalComponent);
    component = fixture.componentInstance;

    modal = new DynamicFormModal(<DynamicFormModalDefinition>{});
    component.element = modal;

    fixture.detectChanges();
  }));

  it('creates component', () => {
    expect(component).toBeDefined();
  });

  it('opens and closes modal', async(() => {
    modal.open();

    fixture.whenStable().then(() => {
      fixture.detectChanges();

      expect(component).toBeDefined();

      modal.close();

      fixture.whenStable().then(() => {
        fixture.detectChanges();

        expect(component).toBeDefined();
      });
    });
  }));
});
