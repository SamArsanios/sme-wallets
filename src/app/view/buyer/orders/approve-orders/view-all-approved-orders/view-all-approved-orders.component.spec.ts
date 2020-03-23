import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllApprovedOrdersComponent } from './view-all-approved-orders.component';

describe('ViewAllApprovedOrdersComponent', () => {
  let component: ViewAllApprovedOrdersComponent;
  let fixture: ComponentFixture<ViewAllApprovedOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllApprovedOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllApprovedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
