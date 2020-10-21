import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertismentContainerComponent } from './advertisment-container.component';

describe('AdvertismentContainerComponent', () => {
  let component: AdvertismentContainerComponent;
  let fixture: ComponentFixture<AdvertismentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertismentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertismentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
