import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliernavComponent } from './suppliernav.component';

describe('SuppliernavComponent', () => {
  let component: SuppliernavComponent;
  let fixture: ComponentFixture<SuppliernavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliernavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliernavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
