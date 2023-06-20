import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSonComponent } from './employee-son.component';

describe('EmployeeSonComponent', () => {
  let component: EmployeeSonComponent;
  let fixture: ComponentFixture<EmployeeSonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeSonComponent]
    });
    fixture = TestBed.createComponent(EmployeeSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
