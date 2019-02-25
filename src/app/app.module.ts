import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { SampleComponent } from './forms/sample.component';
import { PriceValidator } from './validators/price-validator';
import { ContainsWordValidator } from './validators/contains-word-validator';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    PriceValidator,
    ContainsWordValidator,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
