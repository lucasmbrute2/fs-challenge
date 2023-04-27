import { Company } from "@/domain/entities/company";
import { Company as PrismaCompanyEntity } from "@prisma/client"


export class PrismaCompanyMapper {
  static toPrisma(company: Company): PrismaCompanyEntity {
    return {
      id: company.id,
      address: company.address,
      cnpj: company.cnpj,
      email: company.email,
      name: company.name,
      phone: company.phone
    }
  }
}