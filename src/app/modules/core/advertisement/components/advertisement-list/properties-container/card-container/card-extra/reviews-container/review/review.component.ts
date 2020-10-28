import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'cav-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  reviews = [
    {
      title: 'Good',
      tenantId: 3,
      description: 'Very spacious and accessible house',
      vote: 4.5,
    },
    {
      title: 'Not great',
      tenantId: 4,
      description: 'The hostel was very very chaotic ',
      vote: 1.5,
    },
  ]

  constructor() {}

  ngOnInit(): void {}
}
