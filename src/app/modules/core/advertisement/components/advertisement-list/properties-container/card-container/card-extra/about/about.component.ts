import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'cav-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  description =
    "L'appartamento è situato nel pieno centro di Palermo, immerso nella zona più dinamica della città, tutti i principali monumenti ed attrazioni sono raggiungibili a piedi Adatto per vivere il fascino di Palermo Consigliato ad avventurieri singoli, coppie, famiglie e piccoli gruppi di amici"
  constructor() {}

  ngOnInit(): void {}
}
