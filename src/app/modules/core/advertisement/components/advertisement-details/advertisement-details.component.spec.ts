import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { AdvertisementDetailsComponent } from '@modules/core/advertisement/components/advertisement-details/advertisement-details.component'

describe('AdvertisementDetailsComponent', () => {
  let component: AdvertisementDetailsComponent
  let fixture: ComponentFixture<AdvertisementDetailsComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AdvertisementDetailsComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementDetailsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
