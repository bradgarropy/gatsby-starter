import SEO from "@bradgarropy/gatsby-plugin-seo"
import {FC} from "react"

const IndexPage: FC = () => {
    return (
        <>
            <SEO
                title="gatsby starter"
                description="Welcome to gatsby-starter!"
            />

            <h1>home</h1>
        </>
    )
}

export default IndexPage
