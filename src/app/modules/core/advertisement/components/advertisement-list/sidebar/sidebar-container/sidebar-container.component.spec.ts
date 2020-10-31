import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { SidebarContainerComponent } from './sidebar-container.component'

describe('SidebarContainerComponent', () => {
  let component: SidebarContainerComponent
  let fixture: ComponentFixture<SidebarContainerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarContainerComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
