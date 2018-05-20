import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { MathesComponent } from './mathes/mathes.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes:Routes=[
  {path:"contacts",component:ContactsComponent},
  {path:"profile",component:ProfileComponent},
  {path:"mathes",component:MathesComponent},
  {path:"",redirectTo:"/profile",pathMatch:"full"},
  {path:"",component:ProfileComponent,pathMatch:"full"}
]

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
