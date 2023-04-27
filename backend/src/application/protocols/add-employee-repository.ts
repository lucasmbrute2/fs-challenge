import { Employee } from "@/domain/entities/employee";

export interface AddEmployeeRepository {
  add(employeeModel: Employee): Promise<Employee>
}