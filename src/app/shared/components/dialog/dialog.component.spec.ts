import { ComponentFixture, TestBed, async } from '@angular/core/testing'
import { SharedModule } from '@modules/shared/shared.module'

import { DialogComponent } from './dialog.component'

describe('DialogComponent', () => {
  let component: DialogComponent
  let fixture: ComponentFixture<DialogComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DialogComponent],
      imports: [SharedModule],
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
