import { Overlay } from '@angular/cdk/overlay'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed, async } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterTestingModule } from '@angular/router/testing'
import { MaterialModule } from '@modules/shared/material.module'

import { EditComponent } from './edit.component'

describe('EditContainerComponent', () => {
  let component: EditComponent
  let fixture: ComponentFixture<EditComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule,
      ],
      providers: [MatSnackBar, Overlay],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  xit('should create', () => {
    expect(component).toBeTruthy()
  })
})
