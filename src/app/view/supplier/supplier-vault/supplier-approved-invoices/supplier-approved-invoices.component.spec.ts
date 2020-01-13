import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierApprovedInvoicesComponent } from './supplier-approved-invoices.component';

describe('SupplierApprovedInvoicesComponent', () => {
  let component: SupplierApprovedInvoicesComponent;
  let fixture: ComponentFixture<SupplierApprovedInvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierApprovedInvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierApprovedInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
