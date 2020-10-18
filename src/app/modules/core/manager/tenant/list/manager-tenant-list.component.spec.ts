import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { ManagerTenantListComponent } from './manager-tenant-list.component'

describe('ListComponent', () => {
  let component: ManagerTenantListComponent
  let fixture: ComponentFixture<ManagerTenantListComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerTenantListComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerTenantListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
