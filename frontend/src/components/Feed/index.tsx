import { Expandable } from "../Expandable"
import { FormModal } from "../FormModal";
import * as S from "./style"
import { useEffect, useState } from "react"

type Company = {
    name: string;
    id: string;
    cnpj: string;
    email: string;
    address: string;
    phone: string;
}

export function Feed(){
    const [companies, setCompanies] = useState<Company[]>([{
        address: 'Rua bla bla bla',
        cnpj: '393081931/78',
        email: 'company@gmail.com',
        id: 'DJ1O419MKA',
        name: 'Google',
        phone: '319840331'
    }, 
    {
        address: 'Rua bla bla bla',
        cnpj: '393081931/78',
        email: 'company@gmail.com',
        id: 'DJ1O419MKA',
        name: 'Google',
        phone: '319840331'
    }])

    const [openModal, setOpenModal] = useState(false)

    useEffect(()=> {
        async function getCompanies(){
            const response = await fetch(`${process.env.HOST}:${process.env.PORT}/companies`)
            const payload = await response.json();
            setCompanies(payload)
        }
        getCompanies()
    },[])

    async function cb(){
        return Promise.resolve(null)
    }

    function toggleModal(bool?:boolean){
        if (bool) {
            setOpenModal(bool)
        } else {
            setOpenModal(prev=> !prev)
        }
    }

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
                <FormModal cb={cb} title="Cadastrar empresa" modalState={openModal} toggleModal={toggleModal}/>
            </div>
        </>
    )
}

