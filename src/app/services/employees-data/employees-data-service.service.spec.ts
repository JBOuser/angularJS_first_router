import { TestBed } from '@angular/core/testing';

import { EmployeesDataServiceService } from './employees-data-service.service';

describe('EmployeesDataServiceService', () => {
  let service: EmployeesDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeesDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
