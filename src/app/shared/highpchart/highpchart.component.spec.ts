import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighpchartComponent } from './highpchart.component';

describe('HighpchartComponent', () => {
  let component: HighpchartComponent;
  let fixture: ComponentFixture<HighpchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighpchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighpchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
