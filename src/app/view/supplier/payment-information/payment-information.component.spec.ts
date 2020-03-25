import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentInformationComponent } from './payment-information.component';

describe('PaymentInformationComponent', () => {
  let component: PaymentInformationComponent;
  let fixture: ComponentFixture<PaymentInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
