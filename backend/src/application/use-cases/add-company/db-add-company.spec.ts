import { AddCompanyRepository } from "@/application/protocols/add-company-repository";
import { Company } from "@/domain/entities/company";
import { describe, expect, it, vi } from "vitest";
import { DbAddCompanyUseCase } from "./db-add-company";
import { makeAddCompanyRepository, makeCompanyModel } from "@/application/tests/factories";

interface SutTypes {
  sut: DbAddCompanyUseCase
  addCompanyRepositoryStub: AddCompanyRepository
}

const makeSut = (): SutTypes => {
  const addCompanyRepositoryStub = makeAddCompanyRepository()
  const dbAddCompanyUseCase = new DbAddCompanyUseCase(addCompanyRepositoryStub)

  return {
    sut: dbAddCompanyUseCase,
    addCompanyRepositoryStub
  }
}

describe("DbAddCompany Use Case", () => {
  it("Should call AddCompanyRepository with correct values", async () => {
    const { addCompanyRepositoryStub, sut } = makeSut()
    const addSpy = vi.spyOn(addCompanyRepositoryStub, 'add')
    await sut.add(makeCompanyModel())

    const company = new Company(makeCompanyModel())
    expect(addSpy).toHaveBeenCalledWith(company)
  })
})