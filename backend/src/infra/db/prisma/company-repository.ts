import { AddCompanyRepository } from "@/application/protocols/add-company-repository";
import { Company } from "@/domain/entities/company";
import { PrismaCompanyMapper } from "./mappers/company-mapper";
import { PrismaClient } from "@prisma/client";
import { FindCompanyRepository } from "@/application/protocols/find-company-repository";

export class PrismaCompanyRepository implements AddCompanyRepository, FindCompanyRepository {
  private readonly prisma = new PrismaClient()

  async add(companyData: Company): Promise<Company> {
    const company = await this.prisma.company.create({
      data: PrismaCompanyMapper.toPrisma(companyData)
    })

    return new Company(company)
  }

  async find(cnpj: string, email: string): Promise<Company | null> {
    const company = await this.prisma.company.findFirst({
      where: {
        OR: [
          {
            email
          },
          {
            cnpj
          }
        ]
      },
    })

    if (!company) return null
    return new Company(company)
  }
}