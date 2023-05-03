import * as S from "./style";
import { Link } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ExpandableProps {
    companyName?: string;
    name?: string;
    id: string;
    document: string;
    email: string;
    address: string;
    phone: string;
    showEmployeeAnchor: boolean
}

export function Expandable({
    address,
    companyName,
    document,
    email,
    id,
    phone,
    showEmployeeAnchor,
    name
}: ExpandableProps){
    return (
        <S.ExpandableContainer>
            <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography><h2>{showEmployeeAnchor ? companyName : name}</h2></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{
                            display: 'flex',
                            flexWrap: 'wrap'
                        }}>
                            <S.TypographyContainer>
                                <div>
                                    <strong>Código:</strong>
                                    <S.ExpandableField>{id}</S.ExpandableField>
                                </div>
                                <div>
                                    <strong>CNPJ:</strong>
                                    <S.ExpandableField>${document}</S.ExpandableField>
                                </div>
                            </S.TypographyContainer>
                            <S.TypographyContainer>
                                <div>
                                    <strong>Nome:</strong>
                                    <S.ExpandableField>{showEmployeeAnchor ? companyName: name}</S.ExpandableField>
                                </div>
                                <div>
                                    <strong>Email:</strong>
                                    <S.ExpandableField>{email}</S.ExpandableField>
                                </div>
                            </S.TypographyContainer>
                            <S.TypographyContainer>
                                <div>
                                    <strong>Endereço:</strong>
                                    <S.ExpandableField>{address}</S.ExpandableField>
                                </div>
                                <div>
                                    <strong>Telefone:</strong>
                                    <S.ExpandableField>{phone}</S.ExpandableField>
                                </div>
                            </S.TypographyContainer>
                            {showEmployeeAnchor ? (
                                <S.TypographyContainer>
                                    <div>
                                        <Link to={`/employees/${id}`}>
                                            Ver funcionários
                                        </Link>
                                    </div>
                                </S.TypographyContainer>
                            ): (
                                <S.TypographyContainer>
                                <div>
                                    <strong>Empresa:</strong>
                                    <S.ExpandableField>{companyName}</S.ExpandableField>
                                </div>
                            </S.TypographyContainer>
                            ) 
                            }
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </S.ExpandableContainer>
    )
}
