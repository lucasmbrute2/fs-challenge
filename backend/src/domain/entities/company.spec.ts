import { describe, expect, it, vi } from "vitest"
import { Company, CompanyProps } from "./company"

const makeCompanyProps = (): CompanyProps => ({
  address: 'any-address',
  cnpj: 'any-cnpj',
  email: 'any-email',
  id: 'any-id',
  name: 'any-name',
  phone: 'any-phone'
})

interface SutTypes {
  sut: Company
}

const makeSut = (): SutTypes => {
  return {
    sut: new Company(makeCompanyProps())
  }
}

describe("Company entity", () => {
  it("should be able to instance a Company", () => {
    const { sut } = makeSut()

    expect(sut).toBeInstanceOf(Company)
    expect(sut).toMatchObject(makeCompanyProps())
  })
})