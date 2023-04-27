import { Company } from "@/domain/entities/company";

export interface CompanyRepository {
  add(companyData: Company): Promise<Company>
}