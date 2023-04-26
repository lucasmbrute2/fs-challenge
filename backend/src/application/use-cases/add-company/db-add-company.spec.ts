import { AddCompanyRepository } from "@/application/protocols/add-company-repository";
import { Company } from "@/domain/entities/company";
import { makeCompanyProps } from "@/domain/entities/factories";
import { describe, expect, it, vi } from "vitest";
import { DbAddCompany } from "./db-add-company";
import { AddCompanyModel } from "@/domain/use-cases/add-company";

describe("DbAddCompany Use Case", () => {
  it("Should call AddCompanyRepository with correct values", async () => {
    class AddCompanyRepositoryStub implements AddCompanyRepository {
      async add(companyData: Company): Promise<Company> {
        return Promise.resolve(companyData)
      }
    }
    const addCompanyRepositoryStub = new AddCompanyRepositoryStub()
    const company = new Company(makeCompanyProps())
    const sut = new DbAddCompany(addCompanyRepositoryStub)

    const addSpy = vi.spyOn(addCompanyRepositoryStub, 'add')
    const companyModel: AddCompanyModel = {
      address: 'any-address',
      cnpj: 'any-cnpj',
      email: 'any-email',
      id: 'any-id',
      name: 'any-name',
      phone: 'any-phone'
    }

    await sut.add(companyModel)
    expect(addSpy).toHaveBeenCalledWith(company)
  })
})