import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { AddressDetailsComponent } from './address-details.component'

describe('AddressDetailsComponent', () => {
  let component: AddressDetailsComponent
  let fixture: ComponentFixture<AddressDetailsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddressDetailsComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressDetailsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  xit('should create', () => {
    expect(component).toBeTruthy()
  })
})
