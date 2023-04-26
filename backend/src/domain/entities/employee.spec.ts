import { describe, expect, it } from "vitest"
import { Employee } from "./employee"
import { makeEmployeeProps } from "./factories"

interface SutTypes {
  sut: Employee[]
}

const makeSut = (): SutTypes => {
  return {
    sut: [new Employee(makeEmployeeProps())]
  }
}

describe('Employee entity', () => {
  it("should be able to instance a Company with correct values", () => {
    const { sut } = makeSut()

    expect(sut[0]).toBeInstanceOf(Employee)
    expect(sut).toHaveLength(1)
    expect(sut[0]).toMatchObject(makeEmployeeProps())
  })
})
