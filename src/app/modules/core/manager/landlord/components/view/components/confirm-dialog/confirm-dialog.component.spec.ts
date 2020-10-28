import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { ConfirmDialogComponent } from './confirm-dialog.component'

describe('ConfirmDialogComponent', () => {
  let component: ConfirmDialogComponent
  let fixture: ComponentFixture<ConfirmDialogComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmDialogComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  xit('should create', () => {
    expect(component).toBeTruthy()
  })
})
