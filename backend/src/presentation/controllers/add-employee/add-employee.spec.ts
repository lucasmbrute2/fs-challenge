import { describe, expect, it, vi } from "vitest";
import { AddEmployeeController } from "./add-employee";
import { AddEmployee, AddEmployeeModel } from "@/domain/use-cases/add-employee";
import { makeEmployee } from "@/domain/entities/tests/factories";
import { Employee } from "@/domain/entities/employee";
import { makeEmployeeModel } from "@/application/tests/factories";
import { badRequest, created, serverError } from "@/presentation/helpers/http-helper";
import { ServerError } from "@/presentation/errors/server-error";
import { BadRequestError } from "@/presentation/errors/bad-request-error";

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
  it("Should call AddEmployee with correct values", async () => {
    const { addEmployeeStub, sut } = makeSut()
    const addSpy = vi.spyOn(addEmployeeStub, "add")

    await sut.handle({
      body: makeEmployeeModel()
    })

    expect(addSpy).toHaveBeenCalledWith(makeEmployeeModel())
  })

  it("Should return 500 if AddEmployee throws", async () => {
    const { addEmployeeStub, sut } = makeSut()
    vi.spyOn(addEmployeeStub, 'add').mockReturnValueOnce(Promise.reject(new Error()))

    const httpResponse = await sut.handle({
      body: makeEmployeeModel()
    })

    expect(httpResponse).toEqual(serverError(new ServerError(null)))
    expect(httpResponse.statusCode).toBe(500)
  })
})