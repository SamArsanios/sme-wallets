import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSupplierPendingOrdersComponent } from './view-supplier-pending-orders.component';

describe('ViewSupplierPendingOrdersComponent', () => {
  let component: ViewSupplierPendingOrdersComponent;
  let fixture: ComponentFixture<ViewSupplierPendingOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSupplierPendingOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSupplierPendingOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
