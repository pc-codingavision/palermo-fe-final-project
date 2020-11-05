import { Component, Input, OnInit } from '@angular/core'
import { MediaObserver } from '@angular/flex-layout'

@Component({
  selector: 'cav-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Input() opened: boolean

  constructor(public media: MediaObserver) {}

  ngOnInit(): void {}
}
