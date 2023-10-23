import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule
  ],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    ProductCardComponent
  ],
})
export class SharedModule {}
