import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature4RoutingModule } from './feature4-routing.module';
import { AppleComponent } from './apple/apple.component';
import { MangoComponent } from './mango/mango.component';

@NgModule({
  imports: [
    CommonModule,
    Feature4RoutingModule
  ],
  declarations: [AppleComponent, MangoComponent]
})
export class Feature4Module { }
