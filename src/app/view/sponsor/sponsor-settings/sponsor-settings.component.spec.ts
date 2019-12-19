import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorSettingsComponent } from './sponsor-settings.component';

describe('SponsorSettingsComponent', () => {
  let component: SponsorSettingsComponent;
  let fixture: ComponentFixture<SponsorSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
