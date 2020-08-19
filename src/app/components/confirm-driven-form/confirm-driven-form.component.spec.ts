import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmFormDrivenComponent } from './confirm-driven-form.component';

describe('ConfirmFormDrivenComponent', () => {
  let component: ConfirmFormDrivenComponent;
  let fixture: ComponentFixture<ConfirmFormDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmFormDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmFormDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
