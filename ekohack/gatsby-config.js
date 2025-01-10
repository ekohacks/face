module.exports = {
  siteMetadata: {
    title: 'EkoHacks',
    description: 'Bridging Europe and Africa through innovative tech solutions',
    author: 'EkoHacks Team',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'ekohacks',
        short_name: 'ekohacks',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#4ADE80',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown`,
      },
    },
  ],
};
