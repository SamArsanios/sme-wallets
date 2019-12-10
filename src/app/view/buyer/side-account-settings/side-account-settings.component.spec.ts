import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideAccountSettingsComponent } from './side-account-settings.component';

describe('SideAccountSettingsComponent', () => {
  let component: SideAccountSettingsComponent;
  let fixture: ComponentFixture<SideAccountSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideAccountSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideAccountSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
