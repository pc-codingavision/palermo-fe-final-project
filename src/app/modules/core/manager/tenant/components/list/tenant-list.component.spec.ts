import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { TenantListComponent } from '@modules/core/manager/tenant/components/list/tenant-list.component'

describe('TenantListComponent', () => {
  let component: TenantListComponent
  let fixture: ComponentFixture<TenantListComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TenantListComponent],
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
