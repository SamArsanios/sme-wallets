import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSupplierInvoicedOrdersComponent } from './view-supplier-invoiced-orders.component';

describe('ViewSupplierInvoicedOrdersComponent', () => {
  let component: ViewSupplierInvoicedOrdersComponent;
  let fixture: ComponentFixture<ViewSupplierInvoicedOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSupplierInvoicedOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSupplierInvoicedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
