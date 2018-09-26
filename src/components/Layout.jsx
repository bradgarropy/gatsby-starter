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
                <meta name="description" content="gatsby starter"/>
                <meta name="keywords" content="gatsby, react, scss, eslint"/>
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
