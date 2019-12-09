import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentnoticeComponent } from './paymentnotice.component';

describe('PaymentnoticeComponent', () => {
  let component: PaymentnoticeComponent;
  let fixture: ComponentFixture<PaymentnoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentnoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentnoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
