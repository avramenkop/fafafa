import { createReducer, on } from "@ngrx/store";
import * as Actions from "../actions/car.actions";
import { Car } from "../../car.model";
import { initialState } from "../state/cars.state";



export function carReducers(state: any, action: any) {
  const reducer = createReducer(
    initialState,

    on(Actions.addCar, (currentState, { carData }) => ({
      ...currentState,
      cars: [...currentState.cars, new Car(carData.name, carData.model)]
    }) )
  )

  return reducer(state, action)
}
