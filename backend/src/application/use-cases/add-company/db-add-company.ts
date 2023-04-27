import { AddCompanyRepository } from "@/application/protocols/add-company-repository";
import { FindCompanyRepository } from "@/application/protocols/find-company-repository";
import { Company } from "@/domain/entities/company";
import { AddCompany, AddCompanyModel } from "@/domain/use-cases/add-company";

export class DbAddCompanyUseCase implements AddCompany {
  constructor(
    private readonly addCompanyRepository: AddCompanyRepository,
    private readonly findCompanyByCnpjRepository: FindCompanyRepository
  ) { }

  async add(companyData: AddCompanyModel): Promise<Company | null> {
    const isCompanyAlreadyAdded = await this.findCompanyByCnpjRepository.find(companyData.cnpj, companyData.email)
    if (isCompanyAlreadyAdded) {
      const INVALID_COMPANY = null
      return INVALID_COMPANY
    }

    const company = new Company(companyData)
    await this.addCompanyRepository.add(company)
    return company
  }
}