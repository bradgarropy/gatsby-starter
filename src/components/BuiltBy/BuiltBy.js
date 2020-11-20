import BG from "svg/bg.svg"
import styled from "styled-components"

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

            <a href="https://bradgarropy.com" aria-label="bg">
                <BG />
            </a>
        </StyledBuildBy>
    )
}

export default BuiltBy
