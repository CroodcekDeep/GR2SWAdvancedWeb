import { Component } from '@angular/core';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-employee-father',
  templateUrl: './employee-father.component.html',
  styleUrls: ['./employee-father.component.css']
})
export class EmployeeFatherComponent {
  public parentSelectedEmployee!: Employee;

  handleEmployeeSelected(employee: Employee): void {
    this.parentSelectedEmployee = employee;
    console.log('EmployeeFatherComponent: ', this.parentSelectedEmployee)
  }

}
