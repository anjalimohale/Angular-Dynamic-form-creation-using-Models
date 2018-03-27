import { FieldBase } from './field-base';

export class TextboxField extends FieldBase {
  ControlType = 'textbox';

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}