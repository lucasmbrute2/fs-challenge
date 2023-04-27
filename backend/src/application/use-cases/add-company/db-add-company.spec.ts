import { AddCompanyRepository } from "@/application/protocols/add-company-repository";
import { Company } from "@/domain/entities/company";
import { describe, expect, it, vi } from "vitest";
import { DbAddCompanyUseCase } from "./db-add-company";
import { makeAddCompanyRepository, makeCompanyModel, makeFindCompanyByCnpjRepository } from "@/application/tests/factories";
import { FindCompanyRepository } from "@/application/protocols/find-company-repository";
import { makeCompany } from "@/domain/entities/tests/factories";

interface SutTypes {
  sut: DbAddCompanyUseCase
  addCompanyRepositoryStub: AddCompanyRepository
  findCompanyByCnpjStub: FindCompanyRepository
}

const makeSut = (): SutTypes => {
  const addCompanyRepositoryStub = makeAddCompanyRepository()
  const findCompanyByCnpjStub = makeFindCompanyByCnpjRepository()
  const dbAddCompanyUseCase = new DbAddCompanyUseCase(addCompanyRepositoryStub, findCompanyByCnpjStub)

  return {
    sut: dbAddCompanyUseCase,
    addCompanyRepositoryStub,
    findCompanyByCnpjStub
  }
}

describe("DbAddCompany Use Case", () => {
  it("Should call AddCompanyRepository and Company with correct values", async () => {
    const { addCompanyRepositoryStub, sut } = makeSut()
    const addSpy = vi.spyOn(addCompanyRepositoryStub, 'add')
    const companyResponse = await sut.add(makeCompanyModel())

    const company = new Company({ ...makeCompanyModel(), id: companyResponse?.id })
    expect(addSpy).toHaveBeenCalledWith(company)
  })

  it("Should return a Company on success", async () => {
    const { sut } = makeSut()
    const company = await sut.add(makeCompanyModel())

    expect(company).toEqual(new Company({ ...makeCompanyModel(), id: company?.id }))
    expect(company).toBeInstanceOf(Company)
  })

  it("Should return 400 if Company is already added", async () => {
    const { sut, findCompanyByCnpjStub } = makeSut()
    vi.spyOn(findCompanyByCnpjStub, 'find').mockReturnValueOnce(Promise.resolve(makeCompany()))
    const response = await sut.add(makeCompanyModel())

    expect(response).toBeFalsy()
  })
})