import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRaisedInvoicesComponent } from './view-raised-invoices.component';

describe('ViewRaisedInvoicesComponent', () => {
  let component: ViewRaisedInvoicesComponent;
  let fixture: ComponentFixture<ViewRaisedInvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRaisedInvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRaisedInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
