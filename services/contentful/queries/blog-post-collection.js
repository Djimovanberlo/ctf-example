import { gql } from 'graphql-request'

export const blogPostCollectionQuery = gql`
  {
    blogPostCollection {
      items {
        title
        content
        slug
      }
    }
  }
`
