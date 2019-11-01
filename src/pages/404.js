import React from "react"
import Meta from "../components/SEO/Meta"
import Facebook from "../components/SEO/Facebook"
import Twitter from "../components/SEO/Twitter"

const NotFoundPage = () => {
    return (
        <>
            <Meta title="not found"/>
            <Facebook/>
            <Twitter/>

            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn&apos;t exist... the sadness.</p>
        </>
    )
}

export default NotFoundPage
