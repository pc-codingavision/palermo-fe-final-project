import { Overlay } from '@angular/cdk/overlay'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { MatSnackBar } from '@angular/material/snack-bar'
import { TenantContainerComponent } from '@modules/core/manager/tenant/components/container/tenant-container.component'
import { commonTestingModules } from '@shared/common.testing'

describe('TenantContainerComponent', () => {
  let component: TenantContainerComponent
  let fixture: ComponentFixture<TenantContainerComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TenantContainerComponent],
        imports: [commonTestingModules],
        providers: [MatSnackBar, Overlay],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
