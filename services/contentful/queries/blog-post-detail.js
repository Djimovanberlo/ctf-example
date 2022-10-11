import { gql } from 'graphql-request'

export const blogPostDetailQuery = slug => gql`
  {
    blogPostCollection(where: {slug: "${slug}"}, limit: 1) {
      items {
        title
        content
        slug
      }
    }
  }
`
