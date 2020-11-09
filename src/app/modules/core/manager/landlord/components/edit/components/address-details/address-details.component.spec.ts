import { ComponentFixture, TestBed, async } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'

import { AddressDetailsComponent } from './address-details.component'

describe('AddressDetailsComponent', () => {
  let component: AddressDetailsComponent
  let fixture: ComponentFixture<AddressDetailsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddressDetailsComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressDetailsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})