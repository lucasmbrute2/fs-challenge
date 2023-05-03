import styled from "styled-components"

export const AddButtonContainer = styled.button`
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme["green-500"]};
    border: none;
    width: 2rem;
    height: 2rem;
    border-radius: 6rem;
    cursor: pointer;
    font-size: 1.5rem;
    position: absolute;
    right: 2%;
    top: 5%;
`