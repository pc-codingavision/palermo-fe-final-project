import { Component, OnInit } from '@angular/core'
import { LandlordService } from '../../../../shared/services/landlord/landlord.service'


@Component({
  selector: 'cav-advertisement-list',
  templateUrl: './advertisement-list.component.html',
  styleUrls: ['./advertisement-list.component.scss'],
})
export class AdvertisementListComponent implements OnInit {
  constructor(public landserv: LandlordService) {}
  ngOnInit(): void {}
}
