import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import * as S from "./style"
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
    id: z.string(),
    name: z.string().nonempty(),
    email: z.string().email("Email inválido"),
    phone: z.string().nonempty(),
    address: z.string().min(6).max(59),
    cnpj: z.string()
      .refine(value =>
        /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/.test(value)
      , "Formato inválido")
})

export type NewCompanyFormInputs = z.infer<typeof formSchema>

interface ModalProps {
    cb(data: NewCompanyFormInputs):void
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
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm<NewCompanyFormInputs>({
        resolver: zodResolver(formSchema)
    })

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
                        <S.FormContainer onSubmit={handleSubmit(cb)}>
                            <div>
                                <label htmlFor="name">Nome</label>
                                <input type="text" {...register('name')}/>
                                {errors?.name?.message}
                            </div>
                            <div>
                                <label htmlFor="id">Código</label>
                                <input type="text" {...register('id')}/>
                                {errors?.id?.message}
                            </div>
                            <div>
                                <label htmlFor="cnpj">CNPJ</label>
                                <input type="text" {...register('cnpj')}/>
                                {errors?.cnpj?.message}
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="text" {...register('email')}/>
                                {errors?.email?.message}
                            </div>
                            <div>
                                <label htmlFor="address">Endereço</label>
                                <input type="text" {...register('address')}/>
                                {errors?.address?.message}
                            </div>
                            <div>
                                <label htmlFor="phone">Telefone</label>
                                <input type="text" {...register('phone')}/>
                                {errors?.phone?.message}
                            </div>
                            <button>Enviar</button>
                        </S.FormContainer>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}
