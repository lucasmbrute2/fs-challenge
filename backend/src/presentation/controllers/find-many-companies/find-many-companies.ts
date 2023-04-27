import { FindManyCompanies } from "@/domain/use-cases/find-many-companies";
import { ok, serverError } from "@/presentation/helpers/http-helper";
import { Controller } from "@/presentation/protocols/controller";
import { HttpResponse } from "@/presentation/protocols/http";

export class FindManyCompaniesController implements Controller {
  constructor(private readonly dbFindManyCompaniesUseCase: FindManyCompanies) { }

  async handle(): Promise<HttpResponse> {
    try {
      const companies = await this.dbFindManyCompaniesUseCase.find()
      return ok(companies)
    } catch (error) {
      console.error(error)
      return serverError(error)
    }
  }
}