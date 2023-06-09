import { Controller } from "@/presentation/protocols/controller";
import { httpRequest, HttpResponse } from "@/presentation/protocols/http";
import { AddCompany } from "@/domain/use-cases/add-company"
import { badRequest, created, serverError } from "@/presentation/helpers/http-helper";
import { BadRequestError } from "@/presentation/errors/bad-request-error";
import { CompanyView } from "@/presentation/view/company-view";

export class AddCompanyController implements Controller {
  constructor(private readonly addCompany: AddCompany) { }

  async handle(httpRequest: httpRequest): Promise<HttpResponse> {
    try {
      const {
        cnpj,
        name,
        email,
        phone,
        address,
        employee } = httpRequest.body

      const company = await this.addCompany.add({
        cnpj,
        name,
        email,
        phone,
        address,
        employee
      })

      if (!company) return badRequest(new BadRequestError("Company already exists"))

      return created(CompanyView.toHttp(company))
    } catch (error) {
      console.error(error)
      return serverError(error)
    }
  }
}