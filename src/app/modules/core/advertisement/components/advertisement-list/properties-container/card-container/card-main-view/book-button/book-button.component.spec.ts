import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { BookButtonComponent } from './book-button.component'

describe('BookButtonComponent', () => {
  let component: BookButtonComponent
  let fixture: ComponentFixture<BookButtonComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookButtonComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BookButtonComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
