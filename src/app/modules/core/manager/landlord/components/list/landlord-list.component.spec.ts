import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterModule } from '@angular/router'
import { LandlordListComponent } from '@modules/core/manager/landlord/components/list/landlord-list.component'

describe('LandlordListComponent', () => {
  let component: LandlordListComponent
  let fixture: ComponentFixture<LandlordListComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandlordListComponent],
      imports: [RouterModule.forRoot([])],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(LandlordListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
