import { DbAddEmployeeUseCase } from "@/application/use-cases/add-employee/add-employee";
import { PrismaEmployeeRepository } from "@/infra/db/prisma/employee-repository";
import { AddEmployeeController } from "@/presentation/controllers/add-employee/add-employee";
import { Controller } from "@/presentation/protocols/controller";

export const makeAddEmployeeController = (): Controller => {
  const employeeRepository = new PrismaEmployeeRepository()
  const addEmployee = new DbAddEmployeeUseCase(employeeRepository, employeeRepository)
  return new AddEmployeeController(addEmployee)
}