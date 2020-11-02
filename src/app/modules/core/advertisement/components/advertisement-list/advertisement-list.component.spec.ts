import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { AdvertisementListComponent } from '@modules/core/advertisement/components/advertisement-list/advertisement-list.component'

describe('AdvertisementListComponent', () => {
  let component: AdvertisementListComponent
  let fixture: ComponentFixture<AdvertisementListComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdvertisementListComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
