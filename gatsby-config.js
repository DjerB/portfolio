const config = require('./src/config');

module.exports = {
  siteMetadata: {
    title: 'Bachir Djermani',
    description: `Bachir Djermani is a software engineer.`,
    author: `@djerb`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
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
        name: `Bachir Djermani`,
        short_name: `BachirDjermani`,
        start_url: `/`,
        background_color: config.colors.darkNavy,
        theme_color: config.colors.navy,
        display: `minimal-ui`,
        icon: `src/images/logo-dark-navy.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
