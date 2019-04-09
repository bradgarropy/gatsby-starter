import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"

const StyledNavigation = styled.nav`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: auto;
    column-gap: 1rem;
    color: ${({theme}) => theme.colors.white};

    a {
        color: ${({theme}) => theme.colors.white};
    }
`

const Navigation = () => {
    return (
        <StyledNavigation>
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
        </StyledNavigation>
    )
}

export default Navigation
