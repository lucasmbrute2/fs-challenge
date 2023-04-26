import { AddCompanyRepository } from "@/application/protocols/add-company-repository";
import { Company } from "@/domain/entities/company";
import { AddCompany, AddCompanyModel } from "@/domain/use-cases/add-company";

export class DbAddCompany implements AddCompany {
  constructor(private readonly addCompanyRepository: AddCompanyRepository) { }

  async add(companyData: AddCompanyModel): Promise<Company> {
    const company = new Company(companyData)
    await this.addCompanyRepository.add(company)
    return company
  }
}