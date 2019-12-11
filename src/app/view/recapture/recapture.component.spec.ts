import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecaptureComponent } from './recapture.component';

describe('RecaptureComponent', () => {
  let component: RecaptureComponent;
  let fixture: ComponentFixture<RecaptureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecaptureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
