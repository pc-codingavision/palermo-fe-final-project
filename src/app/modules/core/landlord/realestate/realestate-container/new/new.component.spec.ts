import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { NewComponent } from './new.component'

describe('NewComponent', () => {
  let component: NewComponent
  let fixture: ComponentFixture<NewComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(NewComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
