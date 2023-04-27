import { Company } from "../entities/company";

export interface AddCompanyModel {
  cnpj: string
  name: string
  email: string
  phone: string
  address: string
  employee?: []
}

export interface AddCompany {
  add(company: AddCompanyModel): Promise<Company | null>
}