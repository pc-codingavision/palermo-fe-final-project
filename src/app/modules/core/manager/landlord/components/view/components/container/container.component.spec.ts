import { ComponentFixture, TestBed, async } from '@angular/core/testing'
import { MatDialogModule } from '@angular/material/dialog'

import { ViewContainerComponent } from './container.component'

describe('ContainerComponent', () => {
  let component: ViewContainerComponent
  let fixture: ComponentFixture<ViewContainerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewContainerComponent],
      imports: [MatDialogModule],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
