import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierViewOrdersComponent } from './supplier-view-orders.component';

describe('SupplierViewOrdersComponent', () => {
  let component: SupplierViewOrdersComponent;
  let fixture: ComponentFixture<SupplierViewOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierViewOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierViewOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
