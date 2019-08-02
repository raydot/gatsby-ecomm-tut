require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby E-commerce Starter`,
    description: `Working on gettin' started with Gatsby and Stripe.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-stripe`,
    {
      resolve: `gatsby-source-stripe`,
        options: {
          objects: ["Sku"],
          secretKey: process.env.STRIPE_SECRET_KEY,
          downloadFiles: true
        }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

// module.exports = {
//   siteMetadata: {
//     title: "Gatsby E-Commerce Starter",
//   },
//   plugins: ["gatsby-plugin-react-helmet", "gatsby-plugin-stripe"],
// }
