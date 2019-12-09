import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierInvoicedOrdersComponent } from './supplier-invoiced-orders.component';

describe('SupplierInvoicedOrdersComponent', () => {
  let component: SupplierInvoicedOrdersComponent;
  let fixture: ComponentFixture<SupplierInvoicedOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierInvoicedOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierInvoicedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
