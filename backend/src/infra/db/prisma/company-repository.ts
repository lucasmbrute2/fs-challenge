import { AddCompanyRepository } from "@/application/protocols/add-company-repository";
import { Company } from "@/domain/entities/company";
import { PrismaClient } from "@prisma/client"
import { PrismaCompanyMapper } from "./mappers/company-mapper";

export class CompanyRepository implements AddCompanyRepository {
  private readonly prisma = new PrismaClient()

  async add(companyData: Company): Promise<Company> {
    const company = await this.prisma.company.create({
      data: PrismaCompanyMapper.toPrisma(companyData)
    })

    return new Company(company)
  }
}