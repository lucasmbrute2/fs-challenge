import { Employee } from "@/domain/entities/employee";

export class EmployeeView {
  static toHttp(employee: Employee): Partial<Employee> {
    return {
      id: employee.id,
      name: employee.name,
      cpf: employee.cpf,
      email: employee.email,
      address: employee.address,
      phone: employee.phone,
      companyId: employee.companyId
    }
  }
}