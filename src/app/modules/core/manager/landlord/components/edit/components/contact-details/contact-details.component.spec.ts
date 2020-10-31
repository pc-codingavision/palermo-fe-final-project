import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { ContactDetailsComponent } from './contact-details.component'

describe('ContactDetailsComponent', () => {
  let component: ContactDetailsComponent
  let fixture: ComponentFixture<ContactDetailsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactDetailsComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  xit('should create', () => {
    expect(component).toBeTruthy()
  })
})
