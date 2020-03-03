import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'


const IndexPage = () => {
  const data = useStaticQuery(myQuery);
  console.log(data);
  return (
    <>
      <h1>CI / CD Development</h1>
      <hr />
      <pre>
        <code>
          {JSON.stringify(data, null, 2)}
        </code>
      </pre>
    </>
  )
}

export default IndexPage;

const myQuery = graphql`
  query {
    projectloop {
      entries {
        ... on ProjectLoop_news_news_Entry {
          title
          uri
          slug
          description
          body
        }
      }
    }
  }
`