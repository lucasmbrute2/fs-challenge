import { FindManyCompaniesRepository } from "@/application/protocols/find-many-companies-repository";
import { Company } from "@/domain/entities/company";
import { FindManyCompanies } from "@/domain/use-cases/find-many-companies";

export class DbFindManyCompaniesUseCase implements FindManyCompanies {
  constructor(private readonly findManyCompaniesRepository: FindManyCompaniesRepository) { }
  async find(): Promise<Company[]> {
    return await this.findManyCompaniesRepository.findMany()
  }
}