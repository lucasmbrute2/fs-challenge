import { Company } from "@/domain/entities/company";

export class CompanyView {
  static toHttp(company: Company): Partial<Company> {
    return {
      id: company.id,
      name: company.name,
      cnpj: company.cnpj,
      email: company.email,
      address: company.address,
      phone: company.phone,
      employee: company.employee,
    }
  }
}