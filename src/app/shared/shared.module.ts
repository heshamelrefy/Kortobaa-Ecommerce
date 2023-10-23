import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { LastViewCardComponent } from './components/last-view-card/last-view-card.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    ProductCardComponent,
    LastViewCardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    CoreModule
  ],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    ProductCardComponent,
    LastViewCardComponent
  ],
})
export class SharedModule {}
