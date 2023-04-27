import { AddCompanyRepository } from "@/application/protocols/add-company-repository";
import { FindCompanyRepository } from "@/application/protocols/find-company-repository";
import { Company } from "@/domain/entities/company";
import { AddCompanyModel } from "@/domain/use-cases/add-company";

export const makeCompanyModel = (): AddCompanyModel => ({
  address: 'any-address',
  cnpj: 'any-cnpj',
  email: 'any-email',
  name: 'any-name',
  phone: 'any-phone'
})

export const makeAddCompanyRepository = (): AddCompanyRepository => {
  class AddCompanyRepositoryStub implements AddCompanyRepository {
    async add(companyData: Company): Promise<Company> {
      return Promise.resolve(companyData)
    }
  }

  return new AddCompanyRepositoryStub()
}

export const makeFindCompanyByCnpjRepository = (): FindCompanyRepository => {
  class FindCompanyByCnpjStub implements FindCompanyRepository {
    async find(cnpj: string, email: string): Promise<Company> {
      return Promise.resolve(null)
    }
  }

  return new FindCompanyByCnpjStub()
}
