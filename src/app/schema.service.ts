import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';

import { FieldBase } from './field-base';
import { DropdownField } from './dropdown-field';
import { TextboxField } from './textbox-field';

import { CheckboxField } from './checkbox-field.';
import { Container } from './container-base';
import { json1 } from '../assets/schema';
import { json2 } from '../assets/data';
@Injectable()
export class SchemaService{


constructor(){}

getdata(){

  let fields:FieldBase[]=[];
  let obj:FieldBase[]=[];
  let container=[];
  var values:any;
  var field;

for (let keys in json1['components']) {
    // console.log("form_keys", keys);

    values = json1['components'][keys];

    for (let i = 0; i < values['fields'].length; i++) {          
      field = values['fields'][i];
      
      if(field['type']=='string')
      {
        fields[i] = 
          new TextboxField({
            name:field.name,
            title:field.title,
            required:field.required,
            type:"text",
            value:json2['components'][keys][field.name],
          });   
        }
        if(field['type']=='integer')
        {
          fields[i] = 
            new TextboxField({
              name:field.name,
              title:field.title,
              required:field.required,
              type:"number",
              value:json2['components'][keys][field.name],
            });   
          }
          if(field['type']=='password')
          {
            fields[i] = 
              new TextboxField({
                name:field.name,
                title:field.title,
                required:field.required,
                type:"password",
                value:json2['components'][keys][field.name],
              });   
            }
        else if(field['type']=='dropdown')
        {
          fields[i] = 
            new DropdownField({
                name:field.name,
                title:field.title,
                required:field.required,
                options:field.options,
                type:field.type,
                value:json2['components'][keys][field.name],
            });                                       
        } 
        else if(field['type']=='checkbox')
        {
          fields[i] = 
            new CheckboxField({
                name:field.name,
                title:field.title,
                required:field.required,
                type:field.type,
                value:json2['components'][keys][field.name],
            });                                       
        } 
          obj=obj.concat(fields[i]);                    
      }
      
      container.push(new Container({ key:values.title,children:obj})); 
      obj=[];
      // console.log(container); 
    } 
    console.log(container); 
    return container; 
  }
}
