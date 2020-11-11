import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { FavouriteComponent } from './favourite.component'

describe('FavouriteComponent', () => {
  let component: FavouriteComponent
  let fixture: ComponentFixture<FavouriteComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FavouriteComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
