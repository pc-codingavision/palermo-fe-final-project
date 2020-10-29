import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { RealestateListComponent } from './realestate-list.component'

describe('RealestateListComponent', () => {
  let component: RealestateListComponent
  let fixture: ComponentFixture<RealestateListComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RealestateListComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(RealestateListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
