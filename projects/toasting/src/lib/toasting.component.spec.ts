import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastingComponent } from './toasting.component';

describe('ToastingComponent', () => {
  let component: ToastingComponent;
  let fixture: ComponentFixture<ToastingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
