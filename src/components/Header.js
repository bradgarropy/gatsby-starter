import React from "react"
import styled from "styled-components"
import Navigation from "./Navigation"

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${({theme}) => theme.colors.darkPurple};
    color: ${({theme}) => theme.colors.white};
    padding: 1.5rem;

    p {
        margin: 0;
    }
`

const Header = () => {
    return (
        <StyledHeader>
            <p>HEADER</p>
            <Navigation/>
        </StyledHeader>
    )
}

export default Header
