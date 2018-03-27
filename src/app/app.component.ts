import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { SchemaService } from './schema.service';
import { Container } from './container-base';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <div>
      <mat-toolbar color="primary">        
          <i class="material-icons">build</i> <span><h1>Settings</h1></span>          
      </mat-toolbar>          
  </div>
  <div>
      <app-dynamic-form [fields]="fields"></app-dynamic-form>
  <div>
`,
  providers:  [SchemaService],
})

@Injectable()
export class AppComponent {

  fields:any[];

  constructor( private service: SchemaService ) {
 
    this.fields=service.getdata();
    console.log(this.fields);



  }
}