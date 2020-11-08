import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { TenantViewComponent } from './tenant-view.component'

describe('TenantViewComponent', () => {
  let component: TenantViewComponent
  let fixture: ComponentFixture<TenantViewComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TenantViewComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantViewComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
