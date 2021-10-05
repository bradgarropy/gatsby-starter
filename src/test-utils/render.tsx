import {render, RenderOptions, RenderResult} from "@testing-library/react"
import PropTypes from "prop-types"
import {ReactElement} from "react"

const Providers = ({children}) => {
    return children
}

Providers.propTypes = {
    children: PropTypes.node,
}

const customRender = (
    ui: ReactElement,
    options?: RenderOptions,
): RenderResult => render(ui, {wrapper: Providers, ...options})

export * from "@testing-library/react"
export {customRender as render}
