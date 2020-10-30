import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { PhotogalleryComponent } from './photogallery.component'

describe('PhotogalleryComponent', () => {
  let component: PhotogalleryComponent
  let fixture: ComponentFixture<PhotogalleryComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PhotogalleryComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotogalleryComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
