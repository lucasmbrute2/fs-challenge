import { randomUUID } from "node:crypto"

interface CompanyProps {
  id: string
  cnpj: string
  name: string
  email: string
  phone: string
  address: string
}

export class Company {
  private props: CompanyProps

  constructor(props: CompanyProps) {
    this.props = {
      ...props,
      id: this.props.id ?? randomUUID()
    }
  }
}