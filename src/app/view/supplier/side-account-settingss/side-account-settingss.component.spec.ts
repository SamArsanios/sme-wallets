import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideAccountSettingssComponent } from './side-account-settingss.component';

describe('SideAccountSettingssComponent', () => {
  let component: SideAccountSettingssComponent;
  let fixture: ComponentFixture<SideAccountSettingssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideAccountSettingssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideAccountSettingssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
