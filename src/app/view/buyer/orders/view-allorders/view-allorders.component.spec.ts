import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllordersComponent } from './view-allorders.component';

describe('ViewAllordersComponent', () => {
  let component: ViewAllordersComponent;
  let fixture: ComponentFixture<ViewAllordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
