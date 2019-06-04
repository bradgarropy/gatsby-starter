import React from "react"
import Layout from "../components/Layout"
import Meta from "../components/SEO/Meta"
import Facebook from "../components/SEO/Facebook"
import Twitter from "../components/SEO/Twitter"

const About = () => {
    return (
        <Layout>
            <Meta title="about"/>
            <Facebook/>
            <Twitter/>

            <h1>about</h1>
        </Layout>
    )
}

export default About
