import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"

// components
import Header from "./Header"
import Footer from "./Footer"

// favicon
import favicon from "../images/gatsby-icon.png"

// styles
import "../scss/Layout.scss"


const Layout = ({children}) => {

    return (

        <React.Fragment>

            <Helmet>

                <html lang="en"/>

                <title>gatsby starter</title>

                <meta name="description" content="⚛️📄🚀 gatsby starter template"/>
                <meta name="keywords" content="gatsby, react, scss, eslint"/>

                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@bradgarropy"/>
                <meta name="twitter:creator" content="@bradgarropy"/>
                <meta name="twitter:title" content="gatsby starter"/>
                <meta name="twitter:description" content="⚛️📄🚀 gatsby starter template"/>
                <meta name="twitter:image" content="https://res.cloudinary.com/bradgarropy/image/upload/q_auto,f_auto,ar_2:1,c_mpad,w_1800,b_white/gatsby-starter/gatsby-starter.png"/>

                <meta property="og:url" content="https://github.com/bradgarropy/gatsby-starter"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="gatsby starter"/>
                <meta property="og:description" content="⚛️📄🚀 gatsby starter template"/>
                <meta property="og:image" content="https://res.cloudinary.com/bradgarropy/image/upload/q_auto,f_auto,ar_2:1,c_mpad,w_1800,b_white/gatsby-starter/gatsby-starter.png"/>

                <link rel="icon" type="image/png" href={favicon}/>

            </Helmet>

            <div className="layout">

                <Header/>

                <div className="content">
                    {children}
                </div>

                <Footer/>

            </div>

        </React.Fragment>

    )

}


Layout.propTypes = {
    children: PropTypes.node,
}


// export
export default Layout
