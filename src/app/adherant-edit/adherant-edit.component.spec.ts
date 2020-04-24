import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdherantEditComponent } from './adherant-edit.component';

describe('AdherantEditComponent', () => {
  let component: AdherantEditComponent;
  let fixture: ComponentFixture<AdherantEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdherantEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdherantEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
