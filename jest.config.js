const config = {
    clearMocks: true,
    collectCoverage: true,
    setupFilesAfterEnv: ["<rootDir>/src/test-utils/setup.ts"],
    moduleDirectories: ["<rootDir>/src", "node_modules"],
    moduleNameMapper: {
        "\\.(svg)$": "<rootDir>/src/test-utils/file.ts",
        "\\.(css)$": "identity-obj-proxy",
    },
    testEnvironment: "jest-environment-jsdom",
    transformIgnorePatterns: ["node_modules/(?!(gatsby|gatsby-script)/)"],
}

module.exports = config
