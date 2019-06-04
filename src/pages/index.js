import React from "react"
import Layout from "../components/Layout"
import Meta from "../components/SEO/Meta"
import Facebook from "../components/SEO/Facebook"
import Twitter from "../components/SEO/Twitter"

const Index = () => {
    return (
        <Layout>
            <Meta title="gatsby starter"/>
            <Facebook/>
            <Twitter/>

            <h1>home</h1>
        </Layout>
    )
}

export default Index
