import { MenuModule } from '../menu/menu.module';
import { HeaderModule } from '../header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    MenuModule,
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
