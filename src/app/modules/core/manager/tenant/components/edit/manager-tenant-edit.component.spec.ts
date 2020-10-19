import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { ManagerTenantEditComponent } from './manager-tenant-edit.component'

describe('EditComponent', () => {
  let component: ManagerTenantEditComponent
  let fixture: ComponentFixture<ManagerTenantEditComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerTenantEditComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerTenantEditComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
