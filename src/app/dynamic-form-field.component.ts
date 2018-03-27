import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';
 
import { Container } from './container-base';
 
@Component({
  selector: 'app-field',
  templateUrl: './dynamic-form-field.component.html'
})
export class DynamicFormFieldComponent {
  objkey=Object.keys;
  flag=false;
  @Input() fields: Container[]=[];
  @Input() form: FormGroup;
  // checked:true;

    
}