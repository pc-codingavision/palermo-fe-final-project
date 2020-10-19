import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { ManagerTenantViewComponent } from './manager-tenant-view.component'

describe('ManagerTenantViewComponent', () => {
  let component: ManagerTenantViewComponent
  let fixture: ComponentFixture<ManagerTenantViewComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerTenantViewComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerTenantViewComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
