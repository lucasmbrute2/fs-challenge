import { ReactNode, createContext, useState } from "react";

type Company = {
  name: string;
  id: string;
  cnpj: string;
  email: string;
  address: string;
  phone: string;
}

interface CreateContextProps {
  companies: Company[]
  setCompanies: React.Dispatch<React.SetStateAction<Company[]>>
}

interface CompanyProviderProps {
  children: ReactNode;
}

export const CompanyContext = createContext({} as CreateContextProps);

export function CompanyProvider({ children }: CompanyProviderProps) {
  const [companies, setCompanies] = useState<Company[]>([])

  return(
    <CompanyContext.Provider value={{
      companies,
      setCompanies
    }}>
      {children}
    </CompanyContext.Provider>
  )
}