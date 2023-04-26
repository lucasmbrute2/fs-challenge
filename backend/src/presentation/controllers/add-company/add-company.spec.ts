import { describe, expect, it, vi } from "vitest";
import { AddCompanyController } from "./add-company";
import { AddCompany, AddCompanyModel } from "@/domain/use-cases/add-company";
import { Company } from "@/domain/entities/company";
import { makeCompany } from "@/domain/entities/tests/factories";
import { makeCompanyModel } from "@/application/tests/factories";


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

})