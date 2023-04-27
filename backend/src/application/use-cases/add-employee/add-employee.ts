import { AddEmployeeRepository } from "@/application/protocols/add-employee-repository";
import { FindEmployeeRepository } from "@/application/protocols/find-employee-repository";
import { Employee } from "@/domain/entities/employee";
import { AddEmployee, AddEmployeeModel } from "@/domain/use-cases/add-employee";

export class DbAddEmployeeUseCase implements AddEmployee {
  constructor(
    private readonly addEmployeeRepository: AddEmployeeRepository,
    private readonly findEmployeeRepository: FindEmployeeRepository
  ) { }

  async add(employeeData: AddEmployeeModel): Promise<Employee | null> {
    const isEmployeeAlreadyAdded = await this.findEmployeeRepository.find(employeeData.email, employeeData.cpf)
    if (isEmployeeAlreadyAdded) {
      const INVALID_EMPLOYEE = null
      return INVALID_EMPLOYEE
    }

    const employee = new Employee(employeeData)
    await this.addEmployeeRepository.add(employee)
    return employee
  }
}