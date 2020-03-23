import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AproveInvoiceComponent } from './aprove-invoice.component';

describe('AproveInvoiceComponent', () => {
  let component: AproveInvoiceComponent;
  let fixture: ComponentFixture<AproveInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AproveInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AproveInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
