import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { FormControlService }    from './form-control.service';
import { Container } from './container-base';
 
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ FormControlService ]
})
export class DynamicFormComponent implements OnInit {
 
  @Input() fields: Container[] = [];
  form: FormGroup;
  payLoad = '';
  showform:boolean;
  result={};
  constructor(private service: FormControlService) {
   }
 
  ngOnInit() {
    this.form = this.service.toFormGroup(this.fields);
    // console.log(this.form);
    this.showform=true;
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value); var temp = {};
    var f_data=this.form.value;
    var temp1 = {};
  
    for (let k in f_data) {
      let x = (k.split('--'));
     
       if((x[0] in temp1)){
            temp[x[1]] = f_data[k];
            // console.log(temp);
          }
        else{
            temp = {};
            temp[x[1]] = f_data[k];
            // console.log(temp);
        }
       temp1[x[0]] = temp;  
    }
    console.log(temp1);
    this.result['components']=temp1;
    console.log("res",this.result);
  }
  }
