import { Employee } from "@/domain/entities/employee";

export interface FindEmployeeRepository {
  find(email: string, cpf: string): Promise<Employee | null>
}