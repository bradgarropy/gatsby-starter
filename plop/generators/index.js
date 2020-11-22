const test = require("./test")
const component = require("./component")

const generators = plop => {
    plop.setDefaultInclude({generators: true})

    plop.setGenerator("component", component)
    plop.setGenerator("test", test)
}

module.exports = generators
