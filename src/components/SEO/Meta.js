import React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql} from "gatsby"
import Helmet from "react-helmet"
import icon from "../../../static/icon.png"

const Meta = ({title}) => {
    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    description
                    keywords
                }
            }
        }
    `)

    const {description, keywords} = data.site.siteMetadata

    return (
        <Helmet>
            <html lang="en"/>
            <title>{title}</title>
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords}/>
            <link rel="icon" type="image/png" href={icon}/>
        </Helmet>
    )
}

Meta.propTypes = {
    title: PropTypes.string,
}

export default Meta
