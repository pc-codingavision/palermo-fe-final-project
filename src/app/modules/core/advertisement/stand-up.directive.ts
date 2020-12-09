import { Directive, ElementRef } from '@angular/core'

@Directive({
  selector: '[cavStandUp]',
})
export class StandUpDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow'
  }
}
