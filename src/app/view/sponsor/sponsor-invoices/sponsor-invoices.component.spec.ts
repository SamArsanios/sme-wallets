import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorInvoicesComponent } from './sponsor-invoices.component';

describe('SponsorInvoicesComponent', () => {
  let component: SponsorInvoicesComponent;
  let fixture: ComponentFixture<SponsorInvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorInvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
