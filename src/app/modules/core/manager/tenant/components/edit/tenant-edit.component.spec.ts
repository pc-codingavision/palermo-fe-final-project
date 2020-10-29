import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { TenantEditComponent } from './tenant-edit.component'

describe('TenantEditComponent', () => {
  let component: TenantEditComponent
  let fixture: ComponentFixture<TenantEditComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TenantEditComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantEditComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
