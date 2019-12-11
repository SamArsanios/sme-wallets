import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyersDashboardComponent } from './buyers-dashboard.component';

describe('BuyersDashboardComponent', () => {
  let component: BuyersDashboardComponent;
  let fixture: ComponentFixture<BuyersDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyersDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
