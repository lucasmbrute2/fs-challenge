import { Expandable } from "../Expandable"
import { FormFields, FormModal, NewCompanyFormInputs } from "../FormModal";
import * as S from "./style"
import { useCallback, useContext, useState } from "react"
import { api } from "../../api/api";
import { CompanyContext } from "../../contexts/ComapanyContext";
import { AddButton } from "../AddButton";

const formFields: FormFields = [{
    label: "Nome",
    name: 'name',
    type: 'text',
    placeholder: ''
},
{
    label: "CNPJ",
    name: 'document',
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

    const handleNewCompany = useCallback(async (data: NewCompanyFormInputs) => {
        try {
            const { document, ...rest } = data;
            const response = await api.post(`/company`, {
                ...rest,
                cnpj: document
            })
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
 
    const toggleModal = useCallback((bool: boolean)=> {
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
                    <AddButton onClick={()=> toggleModal(true)} text="+"/>
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

