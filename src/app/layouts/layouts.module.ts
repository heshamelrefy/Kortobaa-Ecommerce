import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { LayoutsComponent } from './layouts.component';
import { MenuComponent } from './menu/menu.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LayoutsComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    SharedModule
  ],
  exports:[LayoutsComponent]
})
export class LayoutsModule { }
