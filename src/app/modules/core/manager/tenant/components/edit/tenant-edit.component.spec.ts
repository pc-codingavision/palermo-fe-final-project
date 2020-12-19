import { Overlay } from '@angular/cdk/overlay'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { MatSnackBar } from '@angular/material/snack-bar'
import { TenantEditComponent } from '@modules/core/manager/tenant/components/edit/tenant-edit.component'
import { InMemoryTenantService } from '@modules/shared/services/tenant/in-memory-tenant.service'
import { commonTestingModules } from '@shared/common.testing'

describe('TenantEditComponent', () => {
  let component: TenantEditComponent
  let fixture: ComponentFixture<TenantEditComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TenantEditComponent],
        imports: [commonTestingModules],
        providers: [InMemoryTenantService, MatSnackBar, Overlay],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantEditComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
