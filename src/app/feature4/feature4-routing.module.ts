import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppleComponent } from './apple/apple.component';
import { MangoComponent } from './mango/mango.component';

const routes: Routes = [
  {path:'feature4',
  children:[
    {path:'apple',component:AppleComponent},
    {path:'mango',component:MangoComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feature4RoutingModule { }
