import { Company } from "@/domain/entities/company";

export interface FindCompanyRepository {
  find(cnpj: string, email: string): Promise<Company | null>
}