import "core-js/stable"
import "@testing-library/jest-dom"
import "regenerator-runtime/runtime"

jest.mock("gatsby", () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const React = require("react")
    const gatsby = jest.requireActual("gatsby")

    return {
        ...gatsby,
        graphql: jest.fn(),
        Link: jest.fn().mockImplementation(({to, ...rest}) =>
            React.createElement("a", {
                ...rest,
                href: to,
            }),
        ),
        StaticQuery: jest.fn(),
        useStaticQuery: jest.fn(),
    }
})
