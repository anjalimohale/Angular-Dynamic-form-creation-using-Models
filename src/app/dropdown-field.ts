import { FieldBase } from './field-base';

export class DropdownField extends FieldBase {
  ControlType = 'dropdown';

  
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}