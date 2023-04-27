import { DbFindManyCompaniesUseCase } from "@/application/use-cases/find-many-companies/find-many-companies";
import { PrismaCompanyRepository } from "@/infra/db/prisma/company-repository";
import { FindManyCompaniesController } from "@/presentation/controllers/find-many-companies/find-many-companies";
import { Controller } from "@/presentation/protocols/controller";

export const makeFindManyCompaniesController = (): Controller => {
  const companyRepository = new PrismaCompanyRepository()
  const dbFindManyCompaniesUseCase = new DbFindManyCompaniesUseCase(companyRepository)
  return new FindManyCompaniesController(dbFindManyCompaniesUseCase)
}