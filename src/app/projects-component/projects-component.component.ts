import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeClass } from '../models/employee-class';
import { EmployeesDataServiceService } from '../services/employees-data/employees-data-service.service';
import { RoutingFunctionsService } from '../services/routing-functions/routing-functions.service';

@Component({
  selector: 'app-projects-component',
  templateUrl: './projects-component.component.html',
  styleUrls: ['./projects-component.component.css']
})
export class ProjectsComponentComponent implements OnInit {

  addTitleOne = 'Add a new Employee';
  updateTitleOne = 'Update Employee data';

  public tmpId:string="";
  public tmpName:string="";
  public tmpSurname:string="";
  public tmpPosition:string="";
  public tmpSalary:number=0;

  public employeeParamId:string="";
  private employeeMatch:EmployeeClass;
  private isUpdate:boolean=false;

  //update employees list
  @Input() employees:EmployeeClass[]=[];
  @Output() employeesChange = new EventEmitter<EmployeeClass>();

  constructor(
    private routingFunctions:RoutingFunctionsService,
    private employeesDataService:EmployeesDataServiceService,
    private activateRoute:ActivatedRoute
  ) {}

  ngOnInit(): void {
    if(this.activateRoute.snapshot.paramMap.get('id')!==null){
      this.isUpdate = true;
      this.employeeParamId = this.activateRoute.snapshot.paramMap.get('id');
      this.employeeMatch = this.employeesDataService.getEmployeeById(this.employeeParamId);
      this.loadEmployeeData(this.employeeMatch);
    }    
  }

  getIsUpdate(){ return this.isUpdate; }

  //Add an Employee
  onSubmit(data:any){

    let newEmployee = new EmployeeClass(
      !this.isUpdate ? `${this.employees.length}` : data.id,
      data.name,
      data.surname,
      data.position,
      data.salary
    )

    if(!this.isUpdate){      
      //modalService is injected inside employeesDataService
      this.employeesDataService.addNewEmployee(newEmployee);
    }
    else
    {
      //modalService is injected inside employeesDataService
      this.employeesDataService.updateEmployeeById(newEmployee);
    }

    //redirect to '/home'
    this.home()
  }
  
  //Clean inputs data
  cleanAllInputs(){    
    this.tmpId="";
    this.tmpName="";
    this.tmpSurname="";
    this.tmpPosition="";
    this.tmpSalary=0;
  }

  loadEmployeeData(employeeObject:EmployeeClass){
    this.tmpId = employeeObject.getId();
    this.tmpName = employeeObject.getName();
    this.tmpSurname = employeeObject.getSurname();
    this.tmpPosition = employeeObject.getPosition();
    this.tmpSalary = employeeObject.getSalary();
  }

  home(){
    this.routingFunctions.home();
  }

}
