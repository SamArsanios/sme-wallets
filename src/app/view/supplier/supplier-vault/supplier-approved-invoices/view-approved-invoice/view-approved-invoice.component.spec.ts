import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewApprovedInvoiceComponent } from './view-approved-invoice.component';

describe('ViewApprovedInvoiceComponent', () => {
  let component: ViewApprovedInvoiceComponent;
  let fixture: ComponentFixture<ViewApprovedInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewApprovedInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewApprovedInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
