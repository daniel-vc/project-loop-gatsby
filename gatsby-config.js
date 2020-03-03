require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "ProjectLoop",
        // Field under which the schema is accessible, used in Gatsby query
        fieldName: "projectloop",
        url: "http://loop.test.circulareconomy.space/api",
        // Additional options to pass to node-fetch
        refetchInterval: 60,
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          Authorization: `Bearer ${process.env.GATSBY_GRAPHQL_TOKEN}`,
        },
        // Additional options to pass to node-fetch
        fetchOptions: {},
      },
    },
  ]
}