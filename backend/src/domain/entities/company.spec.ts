import { describe, expect, it } from "vitest"
import { Company } from "./company"
import { makeCompanyProps } from "./tests/factories"

interface SutTypes {
  sut: Company
}

const makeSut = (): SutTypes => {
  return {
    sut: new Company(makeCompanyProps())
  }
}

describe("Company entity", () => {
  it("should be able to instance a Company with correct values", () => {
    const { sut } = makeSut()

    expect(sut).toBeInstanceOf(Company)
    expect(sut).toMatchObject(makeCompanyProps())
  })
})