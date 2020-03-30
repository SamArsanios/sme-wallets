import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPaidComponent } from './get-paid.component';

describe('GetPaidComponent', () => {
  let component: GetPaidComponent;
  let fixture: ComponentFixture<GetPaidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetPaidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
