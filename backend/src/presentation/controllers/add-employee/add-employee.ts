import { AddEmployee } from "@/domain/use-cases/add-employee";
import { BadRequestError } from "@/presentation/errors/bad-request-error";
import { badRequest, created, serverError } from "@/presentation/helpers/http-helper";
import { Controller } from "@/presentation/protocols/controller";
import { httpRequest, HttpResponse } from "@/presentation/protocols/http";
import { EmployeeView } from "@/presentation/view/employee-view";

export class AddEmployeeController implements Controller {
  constructor(private readonly addEmployee: AddEmployee) { }

  async handle(httpRequest: httpRequest): Promise<HttpResponse> {
    try {
      const {
        cpf,
        name,
        email,
        phone,
        address,
        companyId
      } = httpRequest.body

      const employee = await this.addEmployee.add({
        cpf,
        name,
        email,
        phone,
        address,
        companyId
      })

      if (!employee) return badRequest(new BadRequestError("Employee already exists"))

      return created(EmployeeView.toHttp(employee))
    } catch (error) {
      console.error(error)
      return serverError(error)
    }
  }
}