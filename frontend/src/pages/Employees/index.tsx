import { ArrowBendUpLeft } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import * as S from "./style"
import { Expandable } from "../../components/Expandable";

export function Employees(){    
    return (
        <S.EmployeesContainer>
            <div>
                <Link to='/'>
                    <ArrowBendUpLeft size={32} cursor={'pointer'} color="white"/>
                </Link>
            </div>
            <h2>Funcionários</h2>

            <Expandable 
                address="Rua bla bla"
                companyName="Google"
                document="14629440607"
                email="test@gmail.com"
                id="8318318318"
                phone="5593913919"
                key="8318318318"
                showEmployeeAnchor={false}
            />
        </S.EmployeesContainer>
    )
}
