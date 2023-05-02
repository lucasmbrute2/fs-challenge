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

export type FormFields = Array<{
    label: string;
    name: "id" | "name" | "email" | "phone" | "address" | "cnpj";
    type: "text" | "email" | "password" | "number" | "date";
    placeholder: string;
}> 

interface ModalProps {
    onSubmit(data: NewCompanyFormInputs):void
    toggleModal(bool?: boolean): void
    modalState: boolean
    title: string
    formFields: FormFields
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

export function FormModal({ onSubmit, toggleModal, modalState, title, formFields }: ModalProps){
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
                        <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
                            {formFields.map(({ label, name, placeholder, type })=> (
                                <div>
                                    <label htmlFor={name}>{label}</label>
                                    <input type={type} placeholder={placeholder} {...register(name)}/>
                                    {errors[name]?.message}
                                </div>
                            ))}
                            <button>Enviar</button>
                        </S.FormContainer>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}
