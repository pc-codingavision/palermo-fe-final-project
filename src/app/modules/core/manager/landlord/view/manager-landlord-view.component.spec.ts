import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { ManagerLandlordViewComponent } from './manager-landlord-view.component'

describe('ViewComponent', () => {
  let component: ManagerLandlordViewComponent
  let fixture: ComponentFixture<ManagerLandlordViewComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerLandlordViewComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerLandlordViewComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
