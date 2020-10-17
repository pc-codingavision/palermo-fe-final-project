import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { DetailsComponent } from './details.component'

describe('DetailsComponent', () => {
  let component: DetailsComponent
  let fixture: ComponentFixture<DetailsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
