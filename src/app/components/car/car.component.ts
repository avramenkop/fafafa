import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  cars = []

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select('cars').subscribe(cars => {
      this.cars = cars
    })
  }

}
