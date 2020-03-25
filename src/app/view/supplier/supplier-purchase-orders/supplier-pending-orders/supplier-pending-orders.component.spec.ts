import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierPendingOrdersComponent } from './supplier-pending-orders.component';

describe('SupplierPendingOrdersComponent', () => {
  let component: SupplierPendingOrdersComponent;
  let fixture: ComponentFixture<SupplierPendingOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierPendingOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierPendingOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
