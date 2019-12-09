import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedInvoicesComponent } from './approved-invoices.component';

describe('ApprovedInvoicesComponent', () => {
  let component: ApprovedInvoicesComponent;
  let fixture: ComponentFixture<ApprovedInvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedInvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
