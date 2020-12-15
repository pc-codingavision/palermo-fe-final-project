import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { AdvertisementService } from '@modules/core/advertisement/advertisement.service'
import { MockAdvertisement } from '@modules/core/advertisement/mock-advertisement/mock-advertisement'
import { Icon } from '@shared/enum/enums'
import { IScoreConfig } from '@shared/models/advertisement'
import { SpinnerService } from '@shared/services/spinner.service'

@Component({
  selector: 'cav-advertisement-details',
  templateUrl: './advertisement-details.component.html',
  styleUrls: ['./advertisement-details.component.scss'],
})
export class AdvertisementDetailsComponent implements OnInit {
  advertisement: MockAdvertisement
  scoreConfig: IScoreConfig

  constructor(
    private route: ActivatedRoute,
    private advertisementService: AdvertisementService,
    public spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    this.spinnerService.showSpinner()
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 0)
    this.advertisementService.findById(id).subscribe((adv) => {
      this.advertisement = adv
      this.scoreConfig = {
        writable: false,
        minScore: 0,
        maxScore: 5,
        score: adv.score,
        scoreIcon: Icon.Star,
      }
      this.spinnerService.hideSpinner()
    })
  }
}
