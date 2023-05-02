import axios from "axios";
import { Expandable } from "../Expandable"
import { FormModal, NewCompanyFormInputs } from "../FormModal";
import * as S from "./style"
import { useCallback, useEffect, useState } from "react"
import { api } from "../../api/api";

type Company = {
    name: string;
    id: string;
    cnpj: string;
    email: string;
    address: string;
    phone: string;
}

export function Feed(){
    const [companies, setCompanies] = useState<Company[]>([])
    const [openModal, setOpenModal] = useState(false)

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

    const handleNewCompany = useCallback(async (data: NewCompanyFormInputs) => {
        try {
            const response = await api.post(`/company`, data)
            if (!response?.data) {
                alert("Error")
            }
            setCompanies((prev=>[...prev, response.data]))
            
        } catch (error) {
            console.error(error)
            alert("Error")
        } finally {
            setOpenModal(false)
        }
    },[])
 
    const toggleModal = useCallback((bool)=> {
        if (bool) {
            setOpenModal(bool)
        } else {
            setOpenModal(prev=> !prev)
        }
    },[])

    return (
        <>
            <S.Feed>
                <S.TitleContainer>
                    <h2>Empresas</h2>
                    <button onClick={()=> toggleModal(true)}>+</button>
                </S.TitleContainer>
                {companies.map(({ address, cnpj, email, id, name, phone })=> (
                    <Expandable 
                        key={id}
                        address={address}
                        companyName={name}
                        document={cnpj}
                        email={email}
                        phone={phone}
                        id={id}
                        showEmployeeAnchor={true}
                    />
                ))}
            </S.Feed>
            <div>
                <FormModal cb={handleNewCompany} title="Cadastrar empresa" modalState={openModal} toggleModal={toggleModal}/>
            </div>
        </>
    )
}

