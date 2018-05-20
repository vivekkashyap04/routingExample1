import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedComponent } from './red/red.component';
import { GreenComponent } from './green/green.component';

const routes: Routes = [
  {path:'feature2',
  children:[
    {path:'red',component:RedComponent},
    {path:'green',component:GreenComponent},
  ]
  
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feature2RoutingModule { }
