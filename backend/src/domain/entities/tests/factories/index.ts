import { Company, CompanyProps } from "../../company";
import { EmployeeProps } from "../../employee";

export const makeCompanyProps = (): CompanyProps => ({
  id: 'any-id',
  address: 'any-address',
  cnpj: 'any-cnpj',
  email: 'any-email',
  name: 'any-name',
  phone: 'any-phone',
})

export const makeCompany = (override?: Partial<Company>): Company => {
  return new Company({
    ...makeCompanyProps(),
    ...override
  })
}

export const makeEmployeeProps = (): EmployeeProps => ({
  id: 'any-id',
  address: 'any-address',
  company: new Company(makeCompanyProps()),
  cpf: 'any-cpf',
  email: 'any-email',
  name: 'any-name',
  phone: 'any-phone'
})