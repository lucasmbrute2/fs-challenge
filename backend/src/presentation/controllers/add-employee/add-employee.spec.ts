import { describe, expect, it, vi } from "vitest";
import { AddEmployeeController } from "./add-employee";
import { AddEmployee, AddEmployeeModel } from "@/domain/use-cases/add-employee";
import { makeEmployee } from "@/domain/entities/tests/factories";
import { Employee } from "@/domain/entities/employee";
import { makeEmployeeModel } from "@/application/tests/factories";

const makeAddEmployee = (): AddEmployee => {
  class AddEmployeeStub implements AddEmployee {
    add(employee: AddEmployeeModel): Promise<Employee> {
      return Promise.resolve(makeEmployee())
    }
  }

  return new AddEmployeeStub()
}

interface SutTypes {
  sut: AddEmployeeController
  addEmployeeStub: AddEmployee
}

const makeSut = (): SutTypes => {
  const addEmployeeStub = makeAddEmployee()
  const sut = new AddEmployeeController(addEmployeeStub)

  return {
    sut,
    addEmployeeStub
  }
}

describe("AddEmployeeController", () => {
  it("should call AddEmployee with correct values", async () => {
    const { addEmployeeStub, sut } = makeSut()
    const addSpy = vi.spyOn(addEmployeeStub, "add")

    await sut.handle({
      body: makeEmployeeModel()
    })

    expect(addSpy).toHaveBeenCalledWith(makeEmployeeModel())
  })
})