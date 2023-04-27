import { Company, CompanyProps } from "../../company";
import { Employee, EmployeeProps } from "../../employee";

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
  companyId: new Company(makeCompanyProps()).id,
  cpf: 'any-cpf',
  email: 'any-email',
  name: 'any-name',
  phone: 'any-phone'
})

export const makeEmployee = (override?: Partial<Employee>): Employee => {
  return new Employee({
    ...makeEmployeeProps(),
    ...override
  })
}