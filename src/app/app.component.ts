import { Component, OnInit } from '@angular/core'

import { PROPERTY } from './shared/mock-data/mock-property'
import { Property } from './shared/models/property'

@Component({
  selector: 'cav-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'cav-final-project'
  ngOnInit(): void {
    const giulia = Property.Build(PROPERTY[0])
    console.log(giulia)
  }
}
