import Layout from "components/Layout"
import {render, screen} from "test-utils/render"

test("shows layout", () => {
    render(
        <Layout>
            <p>test</p>
        </Layout>,
    )

    expect(screen.getByText("HEADER"))
    expect(screen.getByText("test"))
    expect(screen.getByText("FOOTER"))
})
