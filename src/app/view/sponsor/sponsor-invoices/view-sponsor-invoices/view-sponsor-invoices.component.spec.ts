import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSponsorInvoicesComponent } from './view-sponsor-invoices.component';

describe('ViewSponsorInvoicesComponent', () => {
  let component: ViewSponsorInvoicesComponent;
  let fixture: ComponentFixture<ViewSponsorInvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSponsorInvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSponsorInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
