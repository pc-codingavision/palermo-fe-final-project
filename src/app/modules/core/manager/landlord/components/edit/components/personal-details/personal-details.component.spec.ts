import { ComponentFixture, TestBed, async } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'

import { PersonalDetailsComponent } from './personal-details.component'

describe('PersonalDetailsComponent', () => {
  let component: PersonalDetailsComponent
  let fixture: ComponentFixture<PersonalDetailsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalDetailsComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDetailsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
