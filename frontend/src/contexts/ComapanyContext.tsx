import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../api/api";

type Company = {
  name: string;
  id: string;
  cnpj: string;
  email: string;
  address: string;
  phone: string;
  employee: any[]
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

  useEffect(()=> {
    async function getCompanies(){
        try {
            const response = await api.get("/company")
            if (!response?.data) {
                alert("Error")
            }
            setCompanies(response?.data)
        } catch (error) {
            console.error(error)
            alert("Error")
        }
    }
    getCompanies()
},[])

  return(
    <CompanyContext.Provider value={{
      companies,
      setCompanies
    }}>
      {children}
    </CompanyContext.Provider>
  )
}