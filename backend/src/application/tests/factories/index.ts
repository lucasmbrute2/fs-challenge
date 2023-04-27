import { AddCompanyRepository } from "@/application/protocols/add-company-repository";
import { AddEmployeeRepository } from "@/application/protocols/add-employee-repository";
import { FindCompanyRepository } from "@/application/protocols/find-company-repository";
import { FindEmployeeRepository } from "@/application/protocols/find-employee-repository";
import { Company } from "@/domain/entities/company";
import { Employee } from "@/domain/entities/employee";
import { AddCompanyModel } from "@/domain/use-cases/add-company";
import { AddEmployeeModel } from "@/domain/use-cases/add-employee";

export const makeCompanyModel = (): AddCompanyModel => ({
  address: 'any-address',
  cnpj: 'any-cnpj',
  email: 'any-email',
  name: 'any-name',
  phone: 'any-phone'
})

export const makeEmployeeModel = (): AddEmployeeModel => ({
  address: 'any-address',
  cpf: 'any-cnpj',
  email: 'any-email',
  name: 'any-name',
  phone: 'any-phone',
  companyId: 'any-company-id'
})

export const makeAddCompanyRepository = (): AddCompanyRepository => {
  class AddCompanyRepositoryStub implements AddCompanyRepository {
    async add(companyData: Company): Promise<Company> {
      return Promise.resolve(companyData)
    }
  }

  return new AddCompanyRepositoryStub()
}

export const makeFindCompanyByCnpjRepository = (): FindCompanyRepository => {
  class FindCompanyByCnpjStub implements FindCompanyRepository {
    async find(cnpj: string, email: string): Promise<Company> {
      return Promise.resolve(null)
    }
  }

  return new FindCompanyByCnpjStub()
}

export const makeAddEmployeeRepository = (): AddEmployeeRepository => {
  class AddEmployeeStub implements AddEmployeeRepository {
    add(employeeModel: Employee): Promise<Employee> {
      return Promise.resolve(employeeModel)
    }
  }

  return new AddEmployeeStub()
}

export const makeFindEmployeeRepository = (): FindEmployeeRepository => {
  class FindEmployeeStub implements FindEmployeeRepository {
    find(email: string, cpf: string): Promise<Employee> {
      return Promise.resolve(null)
    }
  }
  return new FindEmployeeStub()
}