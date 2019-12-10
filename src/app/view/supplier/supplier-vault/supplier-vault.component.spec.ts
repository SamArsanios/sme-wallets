import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierVaultComponent } from './supplier-vault.component';

describe('SupplierVaultComponent', () => {
  let component: SupplierVaultComponent;
  let fixture: ComponentFixture<SupplierVaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierVaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierVaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
