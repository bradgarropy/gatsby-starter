import Footer from "components/Footer"
import {render, screen} from "test-utils/render"

test("shows footer", () => {
    render(<Footer />)

    expect(screen.getByText("FOOTER"))
    expect(screen.getByText("built by"))
})
