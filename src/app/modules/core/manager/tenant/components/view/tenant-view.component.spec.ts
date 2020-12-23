import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { FormBuilder } from '@angular/forms'
import { MatDialogModule } from '@angular/material/dialog'
import { TenantViewComponent } from '@modules/core/manager/tenant/components/view/tenant-view.component'

describe('TenantViewComponent', () => {
  let component: TenantViewComponent
  let fixture: ComponentFixture<TenantViewComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MatDialogModule],
        declarations: [TenantViewComponent],
        providers: [FormBuilder],
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
