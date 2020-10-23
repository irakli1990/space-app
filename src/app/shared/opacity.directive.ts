import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appOpacity]'
})
export class OpacityDirective {

  @Input() distance: number;
  opasityValue: number = 1.0;
  constructor() {

  }

  @HostBinding('style.opacity') get opacity() {
    console.log(this.distance)
    if (this.distance <= 10) {
      this.opasityValue = 0.0;
      return String(this.opasityValue);
    } else {
      return String(this.opasityValue);
    }
  }
}
