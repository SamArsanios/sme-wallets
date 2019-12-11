import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveOrdersComponent } from './approve-orders.component';

describe('ApproveOrdersComponent', () => {
  let component: ApproveOrdersComponent;
  let fixture: ComponentFixture<ApproveOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
