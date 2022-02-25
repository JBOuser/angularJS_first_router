import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmployeeClass } from './models/employee-class';
import { EmployeesDataServiceService } from './services/employees-data/employees-data-service.service';
import { ModalServiceService } from './services/modal/modal-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'router-one-app';
}
