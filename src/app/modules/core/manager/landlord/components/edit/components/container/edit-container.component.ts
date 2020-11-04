import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { Landlord } from 'src/app/shared/models/landlord'

import { LANDLORDS_MOCK_DATA } from './../../../../../../../../shared/models/mock-data/data'

@Component({
  selector: 'cav-edit-container',
  templateUrl: './edit-container.component.html',
  styleUrls: ['./edit-container.component.scss'],
})
export class EditContainerComponent implements OnInit {
  landlord: Landlord
  togglePictureContainer = false
  picture: FormControl

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getLandlord()
    this.picture = new FormControl(this.landlord.picture)
  }

  getLandlord(): void {
    // Chiamata al servizio
    const id = +this.activatedRoute.snapshot.paramMap.get('id')
    this.landlord = Landlord.Build(LANDLORDS_MOCK_DATA.find((land) => land.id === id))
  }

  openPictureContainer(): void {
    this.togglePictureContainer = !this.togglePictureContainer
  }

  updatePicture(): void {
    // Chiamata al servizio
    this.landlord.picture = this.picture.value
  }
}
