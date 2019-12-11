import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorVaultSponsorshipComponent } from './sponsor-vault-sponsorship.component';

describe('SponsorVaultSponsorshipComponent', () => {
  let component: SponsorVaultSponsorshipComponent;
  let fixture: ComponentFixture<SponsorVaultSponsorshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorVaultSponsorshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorVaultSponsorshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
