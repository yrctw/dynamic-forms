import { DynamicFormClassType } from '../dynamic-form-config/dynamic-form-class-type';
import { DynamicFormElement } from '../dynamic-form-element/dynamic-form-element';
import { DynamicFormActionExpressionData } from '../dynamic-form-expression/dynamic-form-action-expression-data';
import { DynamicFormActionExpressions } from '../dynamic-form-expression/dynamic-form-action-expressions';
import { assignExpressions, assignExpressionData } from '../dynamic-form-expression/dynamic-form-expression-helpers';
import { DynamicFormField } from '../dynamic-form-field/dynamic-form-field';
import { DynamicFormActionDefinition } from './dynamic-form-action-definition';
import { DynamicFormActionTemplate } from './dynamic-form-action-template';

export class DynamicFormAction<
  Template extends DynamicFormActionTemplate = DynamicFormActionTemplate,
  Definition extends DynamicFormActionDefinition<Template> = DynamicFormActionDefinition<Template>
> extends DynamicFormElement<Template, Definition> {

  private _expressions: DynamicFormActionExpressions;
  private _expressionData: DynamicFormActionExpressionData;

  constructor(readonly root: DynamicFormField, readonly parent: DynamicFormField, definition: Definition) {
    super(definition);
    this._expressionData = this.createExpressionData();
    this._expressions = {};
  }

  get classType(): DynamicFormClassType { return 'action'; }

  get expressions() { return this._expressions; }
  get expressionData() { return this._expressionData; }

  initExpressions(expressions: DynamicFormActionExpressions) {
    if (expressions) {
      this._expressions = expressions;
      assignExpressions(this.template, this._expressions);
    }
  }

  private createExpressionData() {
    const expressionData = {} as DynamicFormActionExpressionData;
    assignExpressionData(expressionData, {
      parent: () => this.parent ? this.parent.expressionData : undefined,
      root: () => this.root ? this.root.expressionData : undefined
    });
    return expressionData;
  }
}
