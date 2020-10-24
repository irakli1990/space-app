import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CodeValidator} from '../code-validator';

@Component({
  selector: 'app-radio-code-form',
  templateUrl: './radio-code-form.component.html',
  styleUrls: ['./radio-code-form.component.css']
})
export class RadioCodeFormComponent implements OnInit {
  @Output() code = new EventEmitter<string>();

  form: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      code: new FormControl('', {
        validators: [
          Validators.required,
          CodeValidator.containsDigit,
          CodeValidator.wordsLimit(4)
        ]
      })
    });
  }


  checkCode(): void {

  }
}
