import { ComponentFixture, TestBed, async, waitForAsync } from '@angular/core/testing'

import { TenantViewComponent } from '@modules/core/manager/tenant/components/view/tenant-view.component'

describe('TenantViewComponent', () => {
  let component: TenantViewComponent
  let fixture: ComponentFixture<TenantViewComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TenantViewComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantViewComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
