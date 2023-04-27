import { DbAddCompanyUseCase } from "@/application/use-cases/add-company/db-add-company";
import { CompanyRepository } from "@/infra/db/prisma/company-repository";
import { AddCompanyController } from "@/presentation/controllers/add-company/add-company";
import { Controller } from "@/presentation/protocols/controller";

export const makeAddCompanyController = (): Controller => {
  const companyRepository = new CompanyRepository()
  const addCompanyUseCase = new DbAddCompanyUseCase(companyRepository)
  return new AddCompanyController(addCompanyUseCase)
}