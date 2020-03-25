import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VewsApprovedInvoicesComponent } from './vews-approved-invoices.component';

describe('VewsApprovedInvoicesComponent', () => {
  let component: VewsApprovedInvoicesComponent;
  let fixture: ComponentFixture<VewsApprovedInvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VewsApprovedInvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VewsApprovedInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
