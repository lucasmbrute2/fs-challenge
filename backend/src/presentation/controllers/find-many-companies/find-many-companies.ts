import { FindManyCompanies } from "@/domain/use-cases/find-many-companies";
import { ok, serverError } from "@/presentation/helpers/http-helper";
import { Controller } from "@/presentation/protocols/controller";
import { HttpResponse } from "@/presentation/protocols/http";
import { CompanyView } from "@/presentation/view/company-view";

export class FindManyCompaniesController implements Controller {
  constructor(private readonly dbFindManyCompaniesUseCase: FindManyCompanies) { }

  async handle(): Promise<HttpResponse> {
    try {
      const companies = await this.dbFindManyCompaniesUseCase.find()
      return ok(companies.map(CompanyView.toHttp))
    } catch (error) {
      console.error(error)
      return serverError(error)
    }
  }
}