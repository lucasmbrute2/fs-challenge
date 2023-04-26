import { AddCompanyRepository } from "@/application/protocols/add-company-repository";
import { Company } from "@/domain/entities/company";
import { makeCompanyProps } from "@/domain/entities/tests/factories";
import { describe, expect, it, vi } from "vitest";
import { DbAddCompany } from "./db-add-company";
import { makeAddCompanyRepository, makeCompanyModel } from "@/application/tests/factories";

interface SutTypes {
  sut: DbAddCompany
  addCompanyRepositoryStub: AddCompanyRepository
}

const makeSut = (): SutTypes => {
  const addCompanyRepositoryStub = makeAddCompanyRepository()
  const dbAddCompany = new DbAddCompany(addCompanyRepositoryStub)

  return {
    sut: dbAddCompany,
    addCompanyRepositoryStub
  }
}

describe("DbAddCompany Use Case", () => {
  it("Should call AddCompanyRepository with correct values", async () => {
    const { addCompanyRepositoryStub, sut } = makeSut()
    const company = new Company(makeCompanyProps())
    const addSpy = vi.spyOn(addCompanyRepositoryStub, 'add')

    await sut.add(makeCompanyModel())
    expect(addSpy).toHaveBeenCalledWith(company)
  })
})