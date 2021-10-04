import SEO from "@bradgarropy/gatsby-plugin-seo"
import {FC} from "react"

const NotFoundPage: FC = () => {
    return (
        <>
            <SEO title="not found" description="How did you even get here?" />

            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn&apos;t exist... the sadness.</p>
        </>
    )
}

export default NotFoundPage
