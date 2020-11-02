import { ComponentFixture, TestBed, async, waitForAsync } from '@angular/core/testing'

import { LandlordEditComponent } from '@modules/core/manager/landlord/components/edit/landlord-edit.component'

describe('LandlordEditComponent', () => {
  let component: LandlordEditComponent
  let fixture: ComponentFixture<LandlordEditComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LandlordEditComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(LandlordEditComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
