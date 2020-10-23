import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface Data {
  apiKey: string;
  userId: string;
}

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {
  @Output() formdata = new EventEmitter<Data>();
  form: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      apiKey: new FormControl('d76b1061fb82411734f6c2062559a3d0', {
        validators: [Validators.required]
      }),
      userId: new FormControl('136485307@N06', {
        validators: [Validators.required],
      }),
    });
  }


  send() {
    this.formdata.emit(this.form.value);
  }
}
