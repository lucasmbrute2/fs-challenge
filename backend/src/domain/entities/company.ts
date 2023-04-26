import { randomUUID } from "node:crypto"
import { Employee } from "./employee"

export interface CompanyProps {
  id?: string
  cnpj: string
  name: string
  email: string
  phone: string
  address: string
  employee?: Employee[]
}

export class Company {
  constructor(private props: CompanyProps) {
    this.props = {
      ...props,
      id: this.props.id ?? randomUUID()
    }
  }

  get id(): string {
    return this.props.id
  }

  set cnpj(cnpj: string) {
    this.props.cnpj = cnpj
  }

  get cnpj(): string {
    return this.props.cnpj
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

  set employee(employee: Employee | Employee[]) {
    if (Array.isArray(employee)) {
      this.props.employee = employee
    } else {
      this.props.employee.push(employee)
    }
  }

  get employee(): Employee[] {
    return this.props.employee
  }
}