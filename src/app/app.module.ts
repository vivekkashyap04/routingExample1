import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { MapService } from './map.service';
import { MathesComponent } from './mathes/mathes.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './/app-routing.module';
import { Feature1Module } from './feature1/feature1.module';
import { Feature2Module } from './feature2/feature2.module';
import { Feature3Module } from './feature3/feature3.module';
import { Feature4Module } from './feature4/feature4.module';
import { ContactsComponent } from './contacts/contacts.component';


@NgModule({
  declarations: [
    AppComponent,
    MathesComponent,
    ProfileComponent,
    ContactsComponent,
    
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule, AppRoutingModule,Feature1Module,Feature2Module, Feature3Module, Feature4Module 
  ],
  providers: [MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
