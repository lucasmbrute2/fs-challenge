import { describe, expect, it, vi } from "vitest";
import { AddCompanyController } from "./add-company";
import { AddCompany, AddCompanyModel } from "@/domain/use-cases/add-company";
import { Company } from "@/domain/entities/company";
import { makeCompany } from "@/domain/entities/tests/factories";
import { makeCompanyModel } from "@/application/tests/factories";
import { serverError } from "@/presentation/helpers/http-helper";
import { ServerError } from "@/presentation/errors/server-error";


const makeAddCompany = (): AddCompany => {
  class AddCompanyStub implements AddCompany {
    async add(company: AddCompanyModel): Promise<Company> {
      return Promise.resolve(makeCompany())
    }
  }

  return new AddCompanyStub()
}

interface SutTypes {
  sut: AddCompanyController
  addCompanyStub: AddCompany
}

const makeSut = (): SutTypes => {
  const addCompanyStub = makeAddCompany()
  const sut = new AddCompanyController(addCompanyStub)

  return {
    sut,
    addCompanyStub
  }
}

describe("Add Company Controller", () => {
  it("Should call AddCompany with correct values", async () => {
    const { sut, addCompanyStub } = makeSut()
    const addSpy = vi.spyOn(addCompanyStub, 'add')

    await sut.handle({
      body: makeCompanyModel()
    })

    expect(addSpy).toHaveBeenCalledWith(makeCompanyModel())
  })

  it('Should return 500 if AddCompany throws', async () => {
    const { addCompanyStub, sut } = makeSut()
    vi.spyOn(addCompanyStub, 'add').mockImplementation(async () => Promise.reject(new Error()))

    const httpResponse = await sut.handle({
      body: makeCompanyModel()
    })

    expect(httpResponse.statusCode).toBe(500)
    expect(httpResponse).toEqual(serverError(new ServerError(null)))
  })

})