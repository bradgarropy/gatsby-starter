import Header from "components/Header"
import {render, screen} from "test-utils/render"

test("shows header", () => {
    render(<Header />)

    expect(screen.getByText("HEADER"))
    expect(screen.getByText("HOME")).toHaveAttribute("href", "/")
    expect(screen.getByText("ABOUT")).toHaveAttribute("href", "/about")
})
