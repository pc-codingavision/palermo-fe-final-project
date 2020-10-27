import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitiesContainerComponent } from './facilities-container.component';

describe('FacilitiesContainerComponent', () => {
  let component: FacilitiesContainerComponent;
  let fixture: ComponentFixture<FacilitiesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilitiesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitiesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
