import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {deleteCar} from "../../store/actions/car.actions";

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

  deleteCar(id) {
    this.store.dispatch(deleteCar({
      carId: {
        id
      }
    }))
  }
}
