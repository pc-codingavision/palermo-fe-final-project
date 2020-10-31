import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { EditContainerComponent } from './edit-container.component'

describe('EditContainerComponent', () => {
  let component: EditContainerComponent
  let fixture: ComponentFixture<EditContainerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditContainerComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(EditContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  xit('should create', () => {
    expect(component).toBeTruthy()
  })
})
