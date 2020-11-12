import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { SidebarContainerComponent } from './sidebar-container.component'

describe('SidebarContainerComponent', () => {
  let component: SidebarContainerComponent
  let fixture: ComponentFixture<SidebarContainerComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SidebarContainerComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
