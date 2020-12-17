import { Directive, ElementRef, HostListener } from '@angular/core'

@Directive({
  selector: '[cavStandUp]',
})
export class StandUpDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter(): void {
    this.el.nativeElement.style.boxShadow = '10px 10px 22px 0px rgb(140, 140, 140, 1)'
  }

  @HostListener('mouseout') onMouseOut(): void {
    this.el.nativeElement.style.boxShadow = null
  }
}
