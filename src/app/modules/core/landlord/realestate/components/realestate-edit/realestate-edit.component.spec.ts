import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { RealestateEditComponent } from './realestate-edit.component'

describe('RealestateEditComponent', () => {
  let component: RealestateEditComponent
  let fixture: ComponentFixture<RealestateEditComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RealestateEditComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(RealestateEditComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
