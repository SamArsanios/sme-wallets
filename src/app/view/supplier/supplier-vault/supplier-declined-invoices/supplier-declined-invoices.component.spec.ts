import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierDeclinedInvoicesComponent } from './supplier-declined-invoices.component';

describe('SupplierDeclinedInvoicesComponent', () => {
  let component: SupplierDeclinedInvoicesComponent;
  let fixture: ComponentFixture<SupplierDeclinedInvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierDeclinedInvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierDeclinedInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
