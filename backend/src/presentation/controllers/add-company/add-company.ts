import { Controller } from "@/presentation/protocols/controller";
import { httpRequest, HttpResponse } from "@/presentation/protocols/http";
import { AddCompany } from "@/domain/use-cases/add-company"
import { created, serverError } from "@/presentation/helpers/http-helper";

export class AddCompanyController implements Controller {
  constructor(private readonly addCompany: AddCompany) { }

  async handle(httpRequest: httpRequest): Promise<HttpResponse> {
    try {
      const { cnpj,
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

      return created(company)
    } catch (error) {
      console.error(error)
      return serverError(error)
    }
  }
}