import Link from "@bradgarropy/gatsby-link"
import {FC} from "react"
import BG from "svg/bg.svg"

import * as styles from "./BuiltBy.module.css"

const BuiltBy: FC = () => {
    return (
        <div className={styles.builtBy}>
            <span>built by</span>

            <Link to="https://bradgarropy.com" aria-label="bg">
                <BG />
            </Link>
        </div>
    )
}

export default BuiltBy
