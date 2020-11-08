import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LandlordNewComponent } from './landlord-new.component'

describe('LandlordNewComponent', () => {
  let component: LandlordNewComponent
  let fixture: ComponentFixture<LandlordNewComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandlordNewComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(LandlordNewComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
