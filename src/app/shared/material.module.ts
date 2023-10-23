import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { MenubarModule } from 'primeng/menubar';
import { TabMenuModule } from 'primeng/tabmenu';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { BadgeModule } from 'primeng/badge';
const material = [
  ButtonModule,
  RippleModule,
  InputTextModule,
  ToolbarModule,
  CardModule,
  MenubarModule,
  TabMenuModule,
  CardModule,
  RatingModule,
  BadgeModule
];

@NgModule({
  declarations: [],
  imports: material,
  exports: material,
})
export class MaterialModule {}
