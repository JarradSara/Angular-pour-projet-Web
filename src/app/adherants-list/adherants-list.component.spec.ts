import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdherantsListComponent } from './adherants-list.component';

describe('AdherantsListComponent', () => {
  let component: AdherantsListComponent;
  let fixture: ComponentFixture<AdherantsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdherantsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdherantsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});