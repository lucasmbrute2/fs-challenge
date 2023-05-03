import styled from "styled-components"

export const FormContainer = styled.form`
    > div {
        padding-top: .5rem;
        > label {
            margin-bottom: .25rem;
            color: #000;
            font-size: 1rem;
            display: block;
        }
        > input {
            outline: none;
            border: none;
            width: 100%;
            font-size: 1rem;
            font-family: 'Poppins', sans-serif;
            border-radius: 2px;
            box-sizing: border-box;
            padding: .25rem;
        }
        > span {
            color: ${(props) => props.theme["red-500"]}
        }
    }
    
    > button {
        color: ${(props) => props.theme["gray-900"]};
        margin-top: 1rem;
        padding: 1rem;
        background-color: ${(props) => props.theme["green-300"]};
        border: none;
        cursor: pointer
    }
`

export const ModalContainer = styled.div`
    position: relative;
`
export const CloseModalButton = styled.span`
    cursor: pointer;
    position: absolute;
    top: 5%;
    right: 5%;
    color: ${(props) => props.theme["gray-900"]};
    font-size: 1.5rem;
`