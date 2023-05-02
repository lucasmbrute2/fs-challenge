import styled from "styled-components"

export const Feed = styled.section`
    width: 100%;
    height: 100%;
`
export const TitleContainer = styled.div`
    padding: 3rem;
    display: flex;
    justify-content: center;
    position: relative;

    > h2 {
        font-size: 1.8rem;
        font-family: "Roboto", sans-serif;
    }

    > button {
        color: ${(props)=> props.theme.white};
        background-color: ${(props)=> props.theme["green-500"]};
        border: none;
        width: 2rem;
        height: 2rem;
        border-radius: 6rem;
        cursor: pointer;
        font-size: 1.5rem;
        position: absolute;
        right: 2%;
        top: 25%;
    }
`
