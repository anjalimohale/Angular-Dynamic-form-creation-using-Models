import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormFieldComponent } from './dynamic-form-field.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SchemaService } from './schema.service';
import { FormControlService } from './form-control.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material';
import {MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFormFieldComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    MatCheckboxModule
  ],
  providers: [SchemaService,FormControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
