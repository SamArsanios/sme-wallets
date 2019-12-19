import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsornavComponent } from './sponsornav.component';

describe('SponsornavComponent', () => {
  let component: SponsornavComponent;
  let fixture: ComponentFixture<SponsornavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsornavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsornavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
