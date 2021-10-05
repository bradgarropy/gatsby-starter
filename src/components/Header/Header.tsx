import Navigation from "components/Navigation"
import {FC} from "react"

import * as styles from "./Header.module.css"

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <p>HEADER</p>
            <Navigation />
        </header>
    )
}

export default Header
