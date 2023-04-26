import { randomUUID } from "node:crypto"
import { Company } from "./company"

export interface EmployeeProps {
  id: string
  cpf: string
  name: string
  email: string
  phone: string
  address: string
  company: Company
}

export class Employee {
  constructor(private props: EmployeeProps) {
    this.props = {
      ...props,
      id: this.props.id ?? randomUUID()
    }
  }

  get id(): string {
    return this.props.id
  }

  set cpf(cpf: string) {
    this.props.cpf = cpf
  }

  get cpf(): string {
    return this.props.cpf
  }

  set name(name: string) {
    this.props.name = name
  }

  get name(): string {
    return this.props.name
  }

  set email(email: string) {
    this.props.email = email
  }

  get email(): string {
    return this.props.email
  }

  set phone(phone: string) {
    this.props.phone = phone
  }

  get phone(): string {
    return this.props.phone
  }
  set address(address: string) {
    this.props.address = address
  }

  get address(): string {
    return this.props.address
  }

  set company(company: Company) {
    this.props.company = company
  }

  get company(): Company {
    return this.props.company
  }
}