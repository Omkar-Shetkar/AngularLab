import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { PriceValidator } from './validators/price-validator';
import { ContainsWordValidator } from './validators/contains-word-validator';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    PriceValidator,
    ContainsWordValidator
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
