import React from "react"
import {Meta, Twitter, Facebook} from "../components/SEO"

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
