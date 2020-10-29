import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { RealestateAddComponent } from './realestate-add.component'

describe('RealestateAddComponent', () => {
  let component: RealestateAddComponent
  let fixture: ComponentFixture<RealestateAddComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RealestateAddComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(RealestateAddComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
