import { Company, CompanyProps } from "../../company";
import { EmployeeProps } from "../../employee";

export const makeCompanyProps = (): CompanyProps => ({
  address: 'any-address',
  cnpj: 'any-cnpj',
  email: 'any-email',
  id: 'any-id',
  name: 'any-name',
  phone: 'any-phone',
})

export const makeEmployeeProps = (): EmployeeProps => ({
  address: 'any-address',
  company: new Company(makeCompanyProps()),
  cpf: 'any-cpf',
  email: 'any-email',
  id: 'any-id',
  name: 'any-name',
  phone: 'any-phone'
})