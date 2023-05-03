import { ArrowBendUpLeft } from "@phosphor-icons/react";
import { Link, useParams } from "react-router-dom";
import * as S from "./style"
import { Expandable } from "../../components/Expandable";
import { FormFields, FormModal } from "../../components/FormModal";
import { useCallback, useContext, useMemo, useState } from "react";
import { CompanyContext } from "../../contexts/ComapanyContext";
import { AddButton } from "../../components/AddButton";
import { api } from "../../api/api";
import { showToast } from "../../helpers/toast";

const formFields: FormFields = [{
    label: "Nome",
    name: 'name',
    type: 'text',
    placeholder: ''
},
{
    label: "CPF",
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

export function Employees(){    
    let { companyId } = useParams()
    const { companies, setCompanies } = useContext(CompanyContext)
    const [openModal, setOpenModal] = useState(false)

    const company = useMemo(()=> {
        return companies.find((c)=> c.id === companyId)
    }, [companyId, companies])

    const handleEmployeeSubmit =  useCallback(async (data: any)=> {
        try {
            const { document, ...rest } = data
            const response = await api.post("/employee", {
                ...rest,
                cpf: document,
                companyId: companyId
            })

            company.employee.push(response.data)
            setCompanies(prev => [...prev, company])            
            showToast("success", {
                text: "Cadastro efetuado com sucesso!"
            })
        } catch (error) {
            showToast("failed", {
                text: 'Colaborador já cadastrado, por favor tente novamente.'
            })
        } finally {
            setOpenModal(false)
        }
    },[])

    if (!company?.employee.length) {
        return (
            <S.EmployeesContainer>
                <S.BackArrowContainer>
                    <Link to='/'>
                        <ArrowBendUpLeft size={32} cursor={'pointer'} color="white"/>
                    </Link>
                </S.BackArrowContainer>
                <p style={{
                    display: "flex",
                    justifyContent: "center",
                }}>Nenhum funcionário cadastrado...</p>

                <AddButton text='+' onClick={()=> setOpenModal(true)}/>

                <FormModal 
                    modalState={openModal}
                    onSubmit={handleEmployeeSubmit}
                    title="Cadastrar funcionários"
                    toggleModal={setOpenModal}
                    formFields={formFields}
                />
            </S.EmployeesContainer>
        ) 
    }

    return (
        <S.EmployeesContainer>
            <AddButton text='+' onClick={()=> setOpenModal(true)}/>
            <h2>Funcionários</h2>
            <S.BackArrowContainer>
                <Link to='/'>
                    <ArrowBendUpLeft size={32} cursor={'pointer'} color="white"/>
                </Link>
            </S.BackArrowContainer>
            
            <FormModal 
                modalState={openModal}
                onSubmit={handleEmployeeSubmit}
                title="Cadastrar funcionários"
                toggleModal={setOpenModal}
                formFields={formFields}
            />

            {company.employee.map(employee => (
                <div key={employee.id}>
                    <Expandable
                        address={employee.address}
                        companyName={company.name}
                        name={employee.name}
                        document={employee.cpf}
                        email={employee.email}
                        id={employee.id}
                        phone={employee.phone}
                        showEmployeeAnchor={false}
                    />
                </div>
            ))}
        </S.EmployeesContainer>
    )
}
