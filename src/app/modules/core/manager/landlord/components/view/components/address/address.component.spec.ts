import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { AddressComponent } from './address.component'

describe('AddressComponent', () => {
  let component: AddressComponent
  let fixture: ComponentFixture<AddressComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddressComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
