import BuiltBy from "components/BuiltBy"
import {FC} from "react"

import * as styles from "./Footer.module.css"

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <p>FOOTER</p>
            <BuiltBy />
        </footer>
    )
}

export default Footer
