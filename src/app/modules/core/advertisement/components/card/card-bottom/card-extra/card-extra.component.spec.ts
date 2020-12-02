import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { MaterialModule } from '@modules/shared/material.module'

import { CardExtraComponent } from './card-extra.component'

describe('CardExtraComponent', () => {
  let component: CardExtraComponent
  let fixture: ComponentFixture<CardExtraComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CardExtraComponent],
        imports: [MaterialModule],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(CardExtraComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
