const path = require("path")

console.log(process.env.TEST_SECRET)

const onCreateWebpackConfig = ({stage, actions}) => {
    if (stage.startsWith("develop")) {
        actions.setWebpackConfig({
            resolve: {
                alias: {"react-dom": "@hot-loader/react-dom"},
            },
        })
    }

    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, "src"), "node_modules"],
        },
    })
}

module.exports = {
    onCreateWebpackConfig,
}
