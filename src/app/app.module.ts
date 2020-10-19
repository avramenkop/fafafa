import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { StoreModule } from '@ngrx/store';
import { carReducers } from "./store/reducers/cars.reducer";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CarComponent } from './components/car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCarComponent,
    CarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({cars: carReducers}, {}),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
