import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFatherComponent } from './employee-father.component';

describe('EmployeeFatherComponent', () => {
  let component: EmployeeFatherComponent;
  let fixture: ComponentFixture<EmployeeFatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeFatherComponent]
    });
    fixture = TestBed.createComponent(EmployeeFatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
