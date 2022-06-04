import { inject, TestBed } from '@angular/core/testing';
import { DynamicFormInputTypeConfig, DYNAMIC_FORM_INPUT_TYPE_CONFIG } from '@dynamic-forms/core';
import { bsDynamicFormSwitchType, BsDynamicFormSwitchModule } from './dynamic-form-switch.module';

describe('BsDynamicFormSwitchModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BsDynamicFormSwitchModule,
      ],
    });
  });

  it('provides DYNAMIC_FORM_INPUT_TYPE_CONFIG',
    inject([DYNAMIC_FORM_INPUT_TYPE_CONFIG], (config: DynamicFormInputTypeConfig) => {
      expect(config.length).toBe(1);
      expect(config[0]).toEqual(bsDynamicFormSwitchType);
    }),
  );
});
