import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PretsListComponent } from './prets-list.component';

describe('PretsListComponent', () => {
  let component: PretsListComponent;
  let fixture: ComponentFixture<PretsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PretsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PretsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});