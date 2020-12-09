import { Directive, ElementRef, HostListener, Input } from '@angular/core'

@Directive({
  selector: '[cavStandUp]',
})
export class StandUpDirective {
  constructor(private el: ElementRef) {}

  @Input('cavStandUp') standUpStyle: string

  @HostListener('mouseenter') onMouseEnter() {
    this.standUp(this.standUpStyle)
  }

  @HostListener('mouseout') onMouseOut() {
    this.standUp(null)
  }

  private standUp(boxShadow: string) {
    this.el.nativeElement.style.shadow = boxShadow
  }
  /*private standUp(boxShadow: string) {
    this.el.nativeElement.style.shadow = boxShadow
  } */
}
