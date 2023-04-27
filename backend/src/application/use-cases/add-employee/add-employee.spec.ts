import { describe, expect, it, vi } from "vitest";
import { DbAddEmployeeUseCase } from "./add-employee";
import { makeAddEmployeeRepository, makeEmployeeModel } from "@/application/tests/factories";
import { AddEmployeeRepository } from "@/application/protocols/add-employee-repository";
import { Employee } from "@/domain/entities/employee";

interface SutTypes {
  sut: DbAddEmployeeUseCase
  addEmployeeStub: AddEmployeeRepository
}

const makeSut = (): SutTypes => {
  const addEmployeeStub = makeAddEmployeeRepository()
  const sut = new DbAddEmployeeUseCase(addEmployeeStub)

  return {
    sut,
    addEmployeeStub
  }
}

describe("DbAddEmployee Use Case", () => {
  it("Should call AddEmployeeRepository with correct values", async () => {
    const { addEmployeeStub, sut } = makeSut()
    const addSpy = vi.spyOn(addEmployeeStub, 'add')
    const response = await sut.add(makeEmployeeModel())

    const employee = new Employee({ ...makeEmployeeModel(), id: response.id })
    expect(addSpy).toHaveBeenCalledWith(employee)
  })

  it("Should return an Employee on success", async () => {
    const { sut } = makeSut()
    const employee = await sut.add(makeEmployeeModel())

    expect(employee).toEqual(new Employee({ ...makeEmployeeModel(), id: employee.id }))
    expect(employee).toBeInstanceOf(Employee)
  })
})