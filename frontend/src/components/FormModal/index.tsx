import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import * as S from "./style"

interface ModalProps {
    cb(url: string): Promise<void>
    toggleModal(bool?: boolean): void
    modalState: boolean
    title: string
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'orange',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
  };

export function FormModal({ cb, toggleModal, modalState, title }: ModalProps){
    return (
        <div>
            <Modal
                open={modalState}
                onClose={()=> toggleModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{
                        textAlign: "center",
                        color: "#29292E"
                    }}>
                        {title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <S.FormContainer>
                            <div>
                                <label htmlFor="name">Nome</label>
                                <input type="text" name='name'/>
                            </div>
                            <div>
                                <label htmlFor="id">Código</label>
                                <input type="text" name='id'/>
                            </div>
                            <div>
                                <label htmlFor="cnpj">CNPJ</label>
                                <input type="text" name='cnpj'/>
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="text" name='email'/>
                            </div>
                            <div>
                                <label htmlFor="address">Endereço</label>
                                <input type="text" name='address'/>
                            </div>
                            <div>
                                <label htmlFor="phone">Telefone</label>
                                <input type="text" name='phone'/>
                            </div>
                            <button>Enviar</button>
                        </S.FormContainer>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}
