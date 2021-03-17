import {FC} from "react"
import "modern-normalize/modern-normalize.css"
import Footer from "components/Footer"
import Header from "components/Header"
import PropTypes from "prop-types"
import styled, {ThemeProvider} from "styled-components"
import Container from "styles/Container"
import GlobalStyles from "styles/GlobalStyles"
import theme from "styles/theme"

const StyledLayout = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    font-family: Roboto, sans-serif;
`

const Layout: FC = ({children}) => (
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
