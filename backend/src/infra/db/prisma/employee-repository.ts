import { AddEmployeeRepository } from "@/application/protocols/add-employee-repository";
import { FindEmployeeRepository } from "@/application/protocols/find-employee-repository";
import { Employee } from "@/domain/entities/employee";
import { PrismaClient } from "@prisma/client";
import { PrismaEmployeeMapper } from "./mappers/employee-mapper";

export class PrismaEmployeeRepository implements AddEmployeeRepository, FindEmployeeRepository {
  private readonly prisma = new PrismaClient()

  async add(employeeModel: Employee): Promise<Employee> {
    const employee = await this.prisma.employee.create({
      data: PrismaEmployeeMapper.toPrisma(employeeModel)
    })

    return new Employee(employee)
  }

  async find(email: string, cpf: string): Promise<Employee | null> {
    const employee = await this.prisma.employee.findFirst({
      where: {
        OR: [
          {
            email
          },
          {
            cpf
          }
        ]
      }
    })

    if (!employee) return null
    return new Employee(employee)
  }
}