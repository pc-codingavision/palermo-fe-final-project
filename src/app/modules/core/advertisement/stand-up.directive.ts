import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core'

@Directive({
  selector: '[cavStandUp]',
})
export class StandUpDirective {
  constructor(private el: ElementRef) // private renderer: Renderer2,
  {}

  /*@Input() appShadow: string
  @Input() appShadowX: string
  @Input() appShadowY: string
  @Input() appShadowBlur: string */

  @Input('cavStandUp') standUpStyle: string

  /*@HostListener('mouseenter') onMouseEnter() {
    let shadowStr = `${this.appShadowX} ${this.appShadowY} ${this.appShadowBlur} ${this.appShadow}`
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', shadowStr)
  }*/

  @HostListener('mouseenter') onMouseEnter() {
    this.standUp(this.standUpStyle || 'red')
  }
  @HostListener('mouseout') onMouseOut() {
    this.standUp(null)
  }

  private standUp(color: string) {
    this.el.nativeElement.style.backgroundColor = color
  }
}
