import { FieldBase } from './field-base';

export class CheckboxField extends FieldBase {
  
  ControlType = 'checkbox';
  constructor(options: {} = {}) {
    super(options);

  }
}