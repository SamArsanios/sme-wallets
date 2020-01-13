import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierFinancedInvoicesComponent } from './supplier-financed-invoices.component';

describe('SupplierFinancedInvoicesComponent', () => {
  let component: SupplierFinancedInvoicesComponent;
  let fixture: ComponentFixture<SupplierFinancedInvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierFinancedInvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierFinancedInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
