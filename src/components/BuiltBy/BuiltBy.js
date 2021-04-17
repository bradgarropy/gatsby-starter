import Link from "@bradgarropy/gatsby-link"
import styled from "styled-components"
import BG from "svg/bg.svg"

const StyledBuildBy = styled.div`
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    gap: 5px;

    svg {
        width: 1.25rem;
        height: auto;
        display: block;
    }
`

const BuiltBy = () => {
    return (
        <StyledBuildBy>
            <span>built by</span>

            <Link to="https://bradgarropy.com" aria-label="bg">
                <BG />
            </Link>
        </StyledBuildBy>
    )
}

export default BuiltBy
