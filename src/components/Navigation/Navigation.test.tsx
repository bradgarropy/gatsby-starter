import Navigation from "components/Navigation"
import {render, screen} from "test-utils/render"

test("shows navigation", () => {
    render(<Navigation />)

    expect(screen.getByText("HOME")).toHaveAttribute("href", "/")
    expect(screen.getByText("ABOUT")).toHaveAttribute("href", "/about")
})
