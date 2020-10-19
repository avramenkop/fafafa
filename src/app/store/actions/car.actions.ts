import {createAction, props} from "@ngrx/store";
import {Car} from "../../car.model";

export const addCar = createAction(
  '[AddCarComponent] ADD_CAR',
  props<{ carData: Car }>()
);

export const deleteCar = createAction(
  '[CarComponent] DELETE_CAR',
  props<{ carId: object }>()
);
