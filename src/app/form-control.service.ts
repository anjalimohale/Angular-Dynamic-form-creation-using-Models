
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Container } from './container-base';
import { SchemaService } from './schema.service';


export class FormControlService {

  constructor() { }

  toFormGroup(fields: Container[] ) {
    let group: any = {};
    // console.log("hello",fields);     
    fields.forEach(field => { 

      // console.log(field);
      for(var i=0;i<(field.children).length;i++){              
          
      group[field.key+'--'+field.children[i].name] = field.children[i].required ? 
      new FormControl(field.children[i].value || '', Validators.required) : new FormControl(field.children[i].value || '');      
            
      }
    }); 
console.log(group);
return new FormGroup(group);  
}
}

