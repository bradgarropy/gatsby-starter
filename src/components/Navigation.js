import React from "react"
import {Link} from "gatsby"

// styles
import "../scss/Navigation.scss"


const Navigation = () => {

    return (

        <div className="navigation">

            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>

        </div>

    )

}


// export
export default Navigation
