import { Overlay } from '@angular/cdk/overlay'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { MatSnackBar } from '@angular/material/snack-bar'
import { AdvertisementContainerComponent } from '@modules/core/advertisement/components/advertisement-container/advertisement-container.component'
import { commonTestingModules } from '@shared/common.testing'

describe('AdvertismentContainerComponent', () => {
  let component: AdvertisementContainerComponent
  let fixture: ComponentFixture<AdvertisementContainerComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AdvertisementContainerComponent],
        imports: [commonTestingModules],
        providers: [MatSnackBar, Overlay],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
