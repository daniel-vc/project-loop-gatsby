import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from '../components/header'

const IndexPage = () => {
  const data = useStaticQuery(myQuery);
  console.log(data);
  return (
    <>
      <Header siteTitle="Project Loop dev" />
      <p>Now being built on the Gatsby Cloud platform!!</p>
      <p>How friggin cool is that!</p>
      <p>Test: S3 should pick up this new change, from master</p>
      <p>Just done another update</p>
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