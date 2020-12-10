import { Overlay } from '@angular/cdk/overlay'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { MatSnackBar } from '@angular/material/snack-bar'
import { TenantListComponent } from '@modules/core/manager/tenant/components/list/tenant-list.component'
import { InMemoryTenantService } from '@modules/shared/services/tenant/in-memory-tenant.service'

describe('TenantListComponent', () => {
  let component: TenantListComponent
  let fixture: ComponentFixture<TenantListComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        declarations: [TenantListComponent],
        providers: [InMemoryTenantService, MatSnackBar, Overlay],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
