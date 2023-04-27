import { AddCompanyRepository } from "@/application/protocols/add-company-repository";
import { Company } from "@/domain/entities/company";
import { PrismaCompanyMapper } from "./mappers/company-mapper";
import { PrismaClient } from "@prisma/client";
import { FindCompanyRepository } from "@/application/protocols/find-company-repository";
import { randomUUID } from "node:crypto";
import { FindManyCompaniesRepository } from "@/application/protocols/find-many-companies-repository";
import { Employee } from "@/domain/entities/employee";


export class PrismaCompanyRepository implements AddCompanyRepository, FindCompanyRepository, FindManyCompaniesRepository {
  private readonly prisma = new PrismaClient()

  async add(companyData: Company): Promise<Company> {
    companyData?.employee?.forEach(employee => employee.id ||= randomUUID())
    const company = await this.prisma.company.create({
      data: {
        ...PrismaCompanyMapper.toPrisma(companyData),
        employee: {
          create: [...companyData.employee]
        }
      }
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

  async findMany(): Promise<Company[]> {
    const companies = await this.prisma.company.findMany({
      include: {
        employee: true
      }
    })
    //@ts-ignore
    return companies.map(company => new Company(company)
    )
  }
}