import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierAllOrdersComponent } from './supplier-all-orders.component';

describe('SupplierAllOrdersComponent', () => {
  let component: SupplierAllOrdersComponent;
  let fixture: ComponentFixture<SupplierAllOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierAllOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierAllOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
