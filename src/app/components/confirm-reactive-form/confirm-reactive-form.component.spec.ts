import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmReactiveFormComponent } from './confirm-reactive-form.component';

describe('ConfirmFormComponent', () => {
  let component: ConfirmReactiveFormComponent;
  let fixture: ComponentFixture<ConfirmReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
