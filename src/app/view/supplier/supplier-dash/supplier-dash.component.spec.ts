import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierDashComponent } from './supplier-dash.component';

describe('SupplierDashComponent', () => {
  let component: SupplierDashComponent;
  let fixture: ComponentFixture<SupplierDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
