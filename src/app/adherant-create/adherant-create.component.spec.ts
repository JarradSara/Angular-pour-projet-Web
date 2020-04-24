import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdherantCreateComponent } from './adherant-create.component';

describe('AdherantCreateComponent', () => {
  let component: AdherantCreateComponent;
  let fixture: ComponentFixture<AdherantCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdherantCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdherantCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});