import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { PhoneComponent } from './phone.component'

describe('PhoneComponent', () => {
  let component: PhoneComponent
  let fixture: ComponentFixture<PhoneComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  xit('should create', () => {
    expect(component).toBeTruthy()
  })
})