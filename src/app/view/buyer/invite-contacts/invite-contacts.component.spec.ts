import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteContactsComponent } from './invite-contacts.component';

describe('InviteContactsComponent', () => {
  let component: InviteContactsComponent;
  let fixture: ComponentFixture<InviteContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
