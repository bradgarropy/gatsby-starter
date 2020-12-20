import BuiltBy from "components/BuiltBy"
import styled from "styled-components"

const StyledFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({theme}) => theme.colors.lightPurple};
    color: ${({theme}) => theme.colors.black};
    padding: 1.5rem;

    p {
        margin: 0;
    }
`

const Footer = () => {
    return (
        <StyledFooter>
            <p>FOOTER</p>
            <BuiltBy />
        </StyledFooter>
    )
}

export default Footer
