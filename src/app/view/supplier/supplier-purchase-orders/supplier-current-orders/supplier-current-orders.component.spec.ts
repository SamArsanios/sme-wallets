import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierCurrentOrdersComponent } from './supplier-current-orders.component';

describe('SupplierCurrentOrdersComponent', () => {
  let component: SupplierCurrentOrdersComponent;
  let fixture: ComponentFixture<SupplierCurrentOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierCurrentOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierCurrentOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
