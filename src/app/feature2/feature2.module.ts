import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature2RoutingModule } from './feature2-routing.module';
import { RedComponent } from './red/red.component';
import { GreenComponent } from './green/green.component';

@NgModule({
  imports: [
    CommonModule,
    Feature2RoutingModule
  ],
  declarations: [RedComponent, GreenComponent]
})
export class Feature2Module { }
