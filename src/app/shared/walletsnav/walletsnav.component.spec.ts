import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletsnavComponent } from './walletsnav.component';

describe('WalletsnavComponent', () => {
  let component: WalletsnavComponent;
  let fixture: ComponentFixture<WalletsnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletsnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletsnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
