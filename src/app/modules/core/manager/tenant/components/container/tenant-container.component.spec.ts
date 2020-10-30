import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { TenantContainerComponent } from './tenant-container.component'

describe('TenantContainerComponent', () => {
  let component: TenantContainerComponent
  let fixture: ComponentFixture<TenantContainerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TenantContainerComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
