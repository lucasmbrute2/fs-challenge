import { Expandable } from "../Expandable"
import { FormFields, FormModal, NewCompanyFormInputs } from "../FormModal";
import * as S from "./style"
import { useCallback, useContext, useEffect, useState } from "react"
import { api } from "../../api/api";
import { CompanyContext } from "../../contexts/ComapanyContext";



const formFields: FormFields = [{
    label: "Nome",
    name: 'name',
    type: 'text',
    placeholder: ''
},
{
    label: "CNPJ",
    name: 'cnpj',
    type: 'text',
    placeholder: ''
},
{
    label: "Código",
    name: 'id',
    type: 'text',
    placeholder: ''
},
{
    label: "Email",
    name: 'email',
    type: 'text',
    placeholder: ''
},
{
    label: "Endereço",
    name: 'address',
    type: 'text',
    placeholder: ''
},
{
    label: "Telefone",
    name: 'phone',
    type: 'text',
    placeholder: ''
}]

export function Feed(){
    const { companies, setCompanies } = useContext(CompanyContext)
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
            setOpenModal(false)
            
        } catch (error) {
            console.error(error)
            alert("Error")
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
                <FormModal 
                    onSubmit={handleNewCompany} 
                    title="Cadastrar empresa" 
                    modalState={openModal} 
                    toggleModal={toggleModal}
                    formFields={formFields}
                    />
            </div>
        </>
    )
}

