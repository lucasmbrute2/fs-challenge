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
    }
`
