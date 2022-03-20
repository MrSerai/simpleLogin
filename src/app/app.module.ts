import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';



import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';


import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';


import {CardModule} from 'primeng/card';
import {SlideMenuModule} from 'primeng/slidemenu';
import {MenuModule} from 'primeng/menu';
import { RegisterEmployeeComponent } from './Admin/register-employee/register-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    RegisterEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    SlideMenuModule,
    MenuModule,
    MatNativeDateModule,
    MatDatepickerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
