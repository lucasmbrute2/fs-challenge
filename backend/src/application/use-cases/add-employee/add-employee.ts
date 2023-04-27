import { AddEmployeeRepository } from "@/application/protocols/add-employee-repository";
import { Employee } from "@/domain/entities/employee";
import { AddEmployee, AddEmployeeModel } from "@/domain/use-cases/add-employee";

export class DbAddEmployeeUseCase implements AddEmployee {
  constructor(
    private readonly addEmployeeRepository: AddEmployeeRepository
  ) { }

  async add(employeeData: AddEmployeeModel): Promise<Employee> {
    const employee = new Employee(employeeData)
    await this.addEmployeeRepository.add(employee)
    return employee
  }
}