import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { ContainerComponent } from './container.component'

describe('ContainerComponent', () => {
  let component: ContainerComponent
  let fixture: ComponentFixture<ContainerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
