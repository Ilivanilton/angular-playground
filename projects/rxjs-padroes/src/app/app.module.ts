import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemDbService } from './in-mem-db.service';
import { Study01Component } from './study01/study01.component';
import { Study02Component } from './study02/study02.component';
import { Study03Component } from './study03/study03.component';

@NgModule({
  declarations: [
    AppComponent,
    Study01Component,
    Study02Component,
    Study03Component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule
      .forRoot(InMemDbService, { delay: 500 }),
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
