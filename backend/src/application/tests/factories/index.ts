import { AddCompanyRepository } from "@/application/protocols/add-company-repository";
import { Company } from "@/domain/entities/company";
import { AddCompanyModel } from "@/domain/use-cases/add-company";

export const makeCompanyModel = (): AddCompanyModel => ({
  address: 'any-address',
  cnpj: 'any-cnpj',
  email: 'any-email',
  id: 'any-id',
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
