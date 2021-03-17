const path = require("path")

const onCreateWebpackConfig = ({actions}) => {
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, "src"), "node_modules"],
        },
    })
}

module.exports = {
    onCreateWebpackConfig,
}
