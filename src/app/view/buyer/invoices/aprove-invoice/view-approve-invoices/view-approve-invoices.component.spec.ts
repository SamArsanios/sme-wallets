import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewApproveInvoicesComponent } from './view-approve-invoices.component';

describe('ViewApproveInvoicesComponent', () => {
  let component: ViewApproveInvoicesComponent;
  let fixture: ComponentFixture<ViewApproveInvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewApproveInvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewApproveInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
