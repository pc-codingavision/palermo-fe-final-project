import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { LandlordListComponent } from '@modules/core/manager/landlord/components/list/landlord-list.component'
import { commonTestingModules } from '@shared/common.testing'

describe('LandlordListComponent', () => {
  let component: LandlordListComponent
  let fixture: ComponentFixture<LandlordListComponent>
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandlordListComponent],
      imports: [commonTestingModules],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(LandlordListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  xit('should create', () => {
    expect(component).toBeTruthy()
  })
})
