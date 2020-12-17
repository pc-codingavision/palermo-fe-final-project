import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TenantSearchComponent } from './tenant-search.component'

describe('SearchComponent', () => {
  let component: TenantSearchComponent
  let fixture: ComponentFixture<TenantSearchComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TenantSearchComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantSearchComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
