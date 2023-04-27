import { Employee } from "@/domain/entities/employee";
import { Employee as PrismaEmployeeEntity } from "@prisma/client"


export class PrismaEmployeeMapper {
  static toPrisma(employee: Employee): PrismaEmployeeEntity {
    return {
      id: employee.id,
      address: employee.address,
      cpf: employee.cpf,
      email: employee.email,
      name: employee.name,
      phone: employee.phone,
      companyId: employee.companyId
    }
  }
}