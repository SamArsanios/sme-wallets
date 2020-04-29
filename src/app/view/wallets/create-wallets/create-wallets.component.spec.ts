import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWalletsComponent } from './create-wallets.component';

describe('CreateWalletsComponent', () => {
  let component: CreateWalletsComponent;
  let fixture: ComponentFixture<CreateWalletsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWalletsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWalletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
