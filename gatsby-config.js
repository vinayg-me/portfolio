module.exports = {
  siteMetadata: {
    title: "Vinay Gopalaiah - Principal Software Engineer | React | Django",
    author: "Vinay Gopalaiah",
    description: "A Full Stack MEAN & MERN Developer with 7+ years experience"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `G-R7SNSN4QLY`,
        // Puts tracking script in the head instead of the body
        head: true,
        // enable ip anonymization
        anonymize: false,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
