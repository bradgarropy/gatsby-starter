import BuiltBy from "components/BuiltBy"
import {render, screen} from "test-utils/render"

test("shows built by", () => {
    render(<BuiltBy />)

    expect(screen.getByText("built by"))

    expect(screen.getByLabelText("bg")).toHaveAttribute(
        "href",
        "https://bradgarropy.com",
    )
})
