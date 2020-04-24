import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PretEditComponent } from './pret-edit.component';

describe('PretEditComponent', () => {
  let component: PretEditComponent;
  let fixture: ComponentFixture<PretEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PretEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PretEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});