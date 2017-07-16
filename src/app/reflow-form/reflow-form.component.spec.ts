import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflowFormComponent } from './reflow-form.component';

describe('ReflowFormComponent', () => {
  let component: ReflowFormComponent;
  let fixture: ComponentFixture<ReflowFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReflowFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflowFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
