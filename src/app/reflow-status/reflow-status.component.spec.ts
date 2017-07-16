import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflowStatusComponent } from './reflow-status.component';

describe('ReflowStatusComponent', () => {
  let component: ReflowStatusComponent;
  let fixture: ComponentFixture<ReflowStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReflowStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflowStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
