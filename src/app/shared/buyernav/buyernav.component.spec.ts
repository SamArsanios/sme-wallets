import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyernavComponent } from './buyernav.component';

describe('BuyernavComponent', () => {
  let component: BuyernavComponent;
  let fixture: ComponentFixture<BuyernavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyernavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyernavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
