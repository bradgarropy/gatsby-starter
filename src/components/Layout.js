import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import {ThemeProvider} from "styled-components"
import Header from "./Header"
import Footer from "./Footer"
import favicon from "../../static/icons/gatsby-icon.png"
import GlobalStyles from "../styles/GlobalStyles"
import theme from "../styles/theme"
import "../scss/Layout.scss"

const Layout = ({children}) => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyles/>

            <Helmet>
                <html lang="en"/>

                <title>gatsby starter</title>

                <meta
                    name="description"
                    content="🥂 the great gatsby starter"
                />
                <meta name="keywords" content="gatsby, react, scss, eslint"/>

                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@bradgarropy"/>
                <meta name="twitter:creator" content="@bradgarropy"/>
                <meta name="twitter:title" content="gatsby starter"/>
                <meta
                    name="twitter:description"
                    content="🥂 the great gatsby starter"
                />
                <meta
                    name="twitter:image"
                    content="https://res.cloudinary.com/bradgarropy/image/upload/q_auto,f_auto,ar_2:1,c_mpad,w_1800,b_white/gatsby-starter/gatsby-starter.png"
                />

                <meta
                    property="og:url"
                    content="https://the-great-gatsby-starter.netlify.com/"
                />
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="gatsby starter"/>
                <meta
                    property="og:description"
                    content="🥂 the great gatsby starter"
                />
                <meta
                    property="og:image"
                    content="https://res.cloudinary.com/bradgarropy/image/upload/q_auto,f_auto,ar_2:1,c_mpad,w_1800,b_white/gatsby-starter/gatsby-starter.png"
                />

                <link rel="icon" type="image/png" href={favicon}/>
            </Helmet>

            <div className="layout">
                <Header/>

                <div className="content">{children}</div>

                <Footer/>
            </div>
        </>
    </ThemeProvider>
)

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
