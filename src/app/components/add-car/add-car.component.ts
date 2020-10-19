import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Store} from "@ngrx/store";
import {addCar} from 'src/app/store/actions/car.actions';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {

  form: FormGroup
  cars = []

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: '',
      model: '',
    })
  }

  addCar() {
    this.store.dispatch(addCar({
      carData: {
        name: this.form.get('name').value,
        model: this.form.get('model').value
      }
    }))
    this.form.reset()
  }
}
