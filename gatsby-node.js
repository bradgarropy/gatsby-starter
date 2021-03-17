const path = require("path")

const onCreateWebpackConfig = ({actions}) => {
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, "src"), "node_modules"],
            extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
        },
    })
}

module.exports = {
    onCreateWebpackConfig,
}
