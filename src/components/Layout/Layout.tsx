import "modern-normalize/modern-normalize.css"
import "styles/styles.css"

import Footer from "components/Footer"
import Header from "components/Header"
import PropTypes from "prop-types"
import {FC} from "react"

import * as styles from "./Layout.module.css"

const Layout: FC = ({children}) => (
    <div className={styles.layout}>
        <Header />
        <main className={styles.container}>{children}</main>
        <Footer />
    </div>
)

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
