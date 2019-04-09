import React from "react"
import PropTypes from "prop-types"
import styled, {ThemeProvider} from "styled-components"
import Meta from "./Meta"
import Header from "./Header"
import Footer from "./Footer"
import theme from "../styles/theme"
import GlobalStyles from "../styles/GlobalStyles"
import Container from "../styles/Container"

const StyledLayout = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    font-family: "Roboto", sans-serif;
`

const Layout = ({children}) => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyles/>
            <Meta/>

            <StyledLayout>
                <Header/>
                <Container>{children}</Container>
                <Footer/>
            </StyledLayout>
        </>
    </ThemeProvider>
)

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
