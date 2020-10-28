import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { ViewContainerComponent } from './container.component'

describe('ContainerComponent', () => {
  let component: ViewContainerComponent
  let fixture: ComponentFixture<ViewContainerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewContainerComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  xit('should create', () => {
    expect(component).toBeTruthy()
  })
})
