import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { LandlordViewComponent } from '@modules/core/manager/landlord/components/view/landlord-view.component'

describe('LandlordViewComponent', () => {
  let component: LandlordViewComponent
  let fixture: ComponentFixture<LandlordViewComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandlordViewComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LandlordViewComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
