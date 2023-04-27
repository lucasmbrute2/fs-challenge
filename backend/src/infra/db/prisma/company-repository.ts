import { CompanyRepository } from "@/application/protocols/add-company-repository";
import { Company } from "@/domain/entities/company";
import { PrismaCompanyMapper } from "./mappers/company-mapper";
import { PrismaClient } from "@prisma/client";

export class PrismaCompanyRepository implements CompanyRepository {
  private readonly prisma = new PrismaClient()

  async add(companyData: Company): Promise<Company> {
    const company = await this.prisma.company.create({
      data: PrismaCompanyMapper.toPrisma(companyData)
    })

    return new Company(company)
  }
}