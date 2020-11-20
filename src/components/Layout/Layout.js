import theme from "styles/theme"
import PropTypes from "prop-types"
import Header from "components/Header"
import Footer from "components/Footer"
import Container from "styles/Container"
import GlobalStyles from "styles/GlobalStyles"
import "modern-normalize/modern-normalize.css"
import styled, {ThemeProvider} from "styled-components"

const StyledLayout = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    font-family: Roboto, sans-serif;
`

const Layout = ({children}) => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyles />

            <StyledLayout>
                <Header />
                <Container>{children}</Container>
                <Footer />
            </StyledLayout>
        </>
    </ThemeProvider>
)

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
