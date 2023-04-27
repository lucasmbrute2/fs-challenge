import { Company } from "@/domain/entities/company";

export interface FindManyCompaniesRepository {
  findMany(): Promise<Company[]>
}