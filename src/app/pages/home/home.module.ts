import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { SwiperModule } from 'swiper/angular';
import { ProductListComponent } from './product-list/product-list.component';
import { LastViewComponent } from './last-view/last-view.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProductListComponent,
    LastViewComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    SwiperModule
  ]
})
export class HomeModule { }
