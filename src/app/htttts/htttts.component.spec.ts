import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttttsComponent } from './htttts.component';

describe('HttttsComponent', () => {
  let component: HttttsComponent;
  let fixture: ComponentFixture<HttttsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttttsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttttsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
