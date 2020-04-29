import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWalletsComponent } from './view-wallets.component';

describe('ViewWalletsComponent', () => {
  let component: ViewWalletsComponent;
  let fixture: ComponentFixture<ViewWalletsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewWalletsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWalletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
