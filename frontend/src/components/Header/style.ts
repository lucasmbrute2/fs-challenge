import styled from "styled-components"

export const Header = styled.header`
    width: 100%;
    height: 5rem;
    background-color: ${(props) => props.theme["gray-700"]};

    > a {
        font-size: 1rem;
        font-family: "Roboto", sans-serif;
        line-height: 1.6;
        padding-left: 2rem;
        padding-top: .5rem;
        display: block;
        color: ${(props) => props.theme.white};
        text-decoration: none;
    }
`
