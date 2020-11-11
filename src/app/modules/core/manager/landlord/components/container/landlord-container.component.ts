import { Component, OnInit } from '@angular/core'
import { LandlordService } from '@modules/shared/services/landlord/landlord.service'
import { Landlord } from '@shared/models/landlord'

@Component({
  selector: 'cav-landlord-container',
  templateUrl: './landlord-container.component.html',
  styleUrls: ['./landlord-container.component.scss'],
})
export class LandlordContainerComponent implements OnInit {
  landlords: Landlord[]
  filteredLandlords: Landlord[]

  constructor(private landlordService: LandlordService) {}

  ngOnInit(): void {
    this.getAll()
  }

  private getAll(): void {
    this.landlordService.getAll().subscribe((landlords) => {
      this.landlords = landlords
      this.filteredLandlords = landlords
    })
  }

  filterCallBack(landlords: Landlord[]): void {
    this.filteredLandlords = landlords
  }

  removeCallBack(id: number): void {
    this.landlordService.delete(id)
    this.getAll()
  }
}
