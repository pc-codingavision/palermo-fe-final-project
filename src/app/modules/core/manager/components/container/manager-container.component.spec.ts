import { ComponentFixture, TestBed, async, waitForAsync } from '@angular/core/testing'

import { ManagerContainerComponent } from '@modules/core/manager/components/container/manager-container.component'

describe('ManagerComponent', () => {
  let component: ManagerContainerComponent
  let fixture: ComponentFixture<ManagerContainerComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ManagerContainerComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
