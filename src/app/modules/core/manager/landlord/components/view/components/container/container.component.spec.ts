import { Overlay } from '@angular/cdk/overlay'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed, async } from '@angular/core/testing'
import { MatSnackBar } from '@angular/material/snack-bar'

import { ViewContainerComponent } from './container.component'

describe('ContainerComponent', () => {
  let component: ViewContainerComponent
  let fixture: ComponentFixture<ViewContainerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewContainerComponent],
      imports: [HttpClientTestingModule],
      providers: [MatSnackBar, Overlay],
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
