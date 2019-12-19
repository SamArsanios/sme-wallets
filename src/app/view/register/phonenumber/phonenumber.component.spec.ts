import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonenumberComponent } from './phonenumber.component';

describe('PhonenumberComponent', () => {
  let component: PhonenumberComponent;
  let fixture: ComponentFixture<PhonenumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonenumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
