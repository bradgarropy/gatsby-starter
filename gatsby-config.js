require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        siteUrl: "https://the-great-gatsby-starter.netlify.com",
        title: "gatsby starter",
        description: "🥂 the great gatsby starter",
        keywords: ["gatsby", "react", "scss", "eslint"],
        email: "bradgarropy@gmail.com",
    },
    plugins: [
        {
            resolve: "gatsby-plugin-react-helmet",
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "gatsby starter",
                short_name: "gatsby starter",
                start_url: "/",
                background_color: "#ffffff",
                theme_color: "#ffffff",
                display: "minimal-ui",
                icon: "static/icon.png",
            },
        },
        {
            resolve: "gatsby-plugin-offline",
        },
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: process.env.TRACKING_ID,
                head: true,
                anonymize: true,
                respectDNT: false,
            },
        },
        {
            resolve: "gatsby-plugin-google-fonts",
            options: {
                fonts: ["roboto"],
            },
        },
        {
            resolve: "gatsby-plugin-styled-components",
        },
    ],
}
