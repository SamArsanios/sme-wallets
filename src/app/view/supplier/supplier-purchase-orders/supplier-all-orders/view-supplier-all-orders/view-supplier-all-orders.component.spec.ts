import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSupplierAllOrdersComponent } from './view-supplier-all-orders.component';

describe('ViewSupplierAllOrdersComponent', () => {
  let component: ViewSupplierAllOrdersComponent;
  let fixture: ComponentFixture<ViewSupplierAllOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSupplierAllOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSupplierAllOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
