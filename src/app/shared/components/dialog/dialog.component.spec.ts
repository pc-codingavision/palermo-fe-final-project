import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { DialogComponent } from './dialog.component'

describe('DialogComponent', () => {
  let component: DialogComponent
  let fixture: ComponentFixture<DialogComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DialogComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  xit('should create', () => {
    expect(component).toBeTruthy()
  })
})
