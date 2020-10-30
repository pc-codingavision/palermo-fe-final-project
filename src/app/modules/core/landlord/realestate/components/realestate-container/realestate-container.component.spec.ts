import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { RealestateContainerComponent } from './realestate-container.component'

describe('RealestateContainerComponent', () => {
  let component: RealestateContainerComponent
  let fixture: ComponentFixture<RealestateContainerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RealestateContainerComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(RealestateContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
