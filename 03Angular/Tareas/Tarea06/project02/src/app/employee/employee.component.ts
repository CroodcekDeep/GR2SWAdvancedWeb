import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/Employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
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
  public getRandomEmployee(): Employee {
    if (this.listEmployees && this.listEmployees.length > 0) {
      this.randomEmployee = this.listEmployees[Math.floor(Math.random() * this.listEmployees.length)];
    }
    return this.randomEmployee;
  }
}
