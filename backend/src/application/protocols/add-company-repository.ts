import { Company } from "@/domain/entities/company";

export interface AddCompanyRepository {
  add(companyData: Company): Promise<Company>
}