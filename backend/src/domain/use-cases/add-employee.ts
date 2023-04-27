import { Employee } from "../entities/employee"

export interface AddEmployeeModel {
  cpf: string
  name: string
  email: string
  phone: string
  address: string
  companyId: string
}

export interface AddEmployee {
  add(employee: AddEmployeeModel): Promise<Employee | null>
}