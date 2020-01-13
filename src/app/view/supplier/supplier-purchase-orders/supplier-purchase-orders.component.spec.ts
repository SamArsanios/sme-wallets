import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierPurchaseOrdersComponent } from './supplier-purchase-orders.component';

describe('SupplierPurchaseOrdersComponent', () => {
  let component: SupplierPurchaseOrdersComponent;
  let fixture: ComponentFixture<SupplierPurchaseOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierPurchaseOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierPurchaseOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
