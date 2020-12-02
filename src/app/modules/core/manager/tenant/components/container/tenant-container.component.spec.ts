import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { TenantContainerComponent } from '@modules/core/manager/tenant/components/container/tenant-container.component'

describe('TenantContainerComponent', () => {
  let component: TenantContainerComponent
  let fixture: ComponentFixture<TenantContainerComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TenantContainerComponent],
        imports: [HttpClientTestingModule],
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
