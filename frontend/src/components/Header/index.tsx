import { Link } from "react-router-dom"
import * as S from "./style"

export function Header(){
    return (
        <S.Header>
            <Link to={'/'}>
                <h1>SX Group</h1>
            </Link>
        </S.Header>
    )
}
