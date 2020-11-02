import { ComponentFixture, TestBed } from '@angular/core/testing'
import { LandlordContainerComponent } from '@modules/core/landlord/components/container/landlord-container.component'

describe('LandlordContainerComponent', () => {
  let component: LandlordContainerComponent
  let fixture: ComponentFixture<LandlordContainerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandlordContainerComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(LandlordContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
