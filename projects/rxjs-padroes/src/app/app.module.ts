import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppData } from './app-data';
import { Study01Component } from './study01/study01.component';
import { Study02Component } from './study02/study02.component';
import { Study03Component } from './study03/study03.component';
import { ProductPipe, ProductCategoryPipe } from './study03/product.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Study01Component,
    Study02Component,
    Study03Component,
    ProductPipe,
    ProductCategoryPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule
      .forRoot(AppData, { delay: 500 }),
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
