import { Company } from "../entities/company";

export interface FindManyCompanies {
  find(): Promise<Company[]>
}