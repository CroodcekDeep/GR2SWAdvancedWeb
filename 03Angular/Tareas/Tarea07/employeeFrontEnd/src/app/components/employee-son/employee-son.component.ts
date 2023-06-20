import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-son',
  templateUrl: './employee-son.component.html',
  styleUrls: ['./employee-son.component.css']
})
export class EmployeeSonComponent implements OnInit {
  @Input() selectedEmployee!: Employee;

  @Output() employeeSelected: EventEmitter<Employee> = new EventEmitter<Employee>();

  public listEmployees!: Employee[];
  public randomEmployee!: Employee;

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(): void {
    this.employeeService.listAllEmployee().subscribe(
      response => {
        this.listEmployees = response;
      },
      (error: any) => {
        console.log('ERROR ENCONTRADO:', error);
      }
    );
  }

  // Crear metodo para escoger 1 empleado al azar
  /*
  public getRandomEmployee(): Employee {
    if (this.listEmployees && this.listEmployees.length > 0) {
      this.randomEmployee = this.listEmployees[Math.floor(Math.random() * this.listEmployees.length)];
    }
    return this.randomEmployee;
  }
  */

  public getRandomEmployee(): Employee {
    if (this.listEmployees && this.listEmployees.length > 0) {
      this.randomEmployee = this.listEmployees[Math.floor(Math.random() * this.listEmployees.length)];
      this.employeeSelected.emit(this.randomEmployee);
    }
    return this.randomEmployee;
  }

}
