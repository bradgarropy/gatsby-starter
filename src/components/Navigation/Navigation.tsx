import Link from "@bradgarropy/gatsby-link"
import {FC} from "react"

import * as styles from "./Navigation.module.css"

const Navigation: FC = () => {
    return (
        <nav className={styles.navigation}>
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
        </nav>
    )
}

export default Navigation
