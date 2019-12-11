import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionalHistoryComponent } from './transactional-history.component';

describe('TransactionalHistoryComponent', () => {
  let component: TransactionalHistoryComponent;
  let fixture: ComponentFixture<TransactionalHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionalHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionalHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
