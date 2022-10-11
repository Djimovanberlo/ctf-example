import { GraphQLClient } from 'graphql-request'

const CTF_SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const CTF_ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const CONTENTFUL_URL = `https://graphql.contentful.com/content/v1/spaces/${CTF_SPACE_ID}`

const createClient = () => {
  const client = new GraphQLClient(CONTENTFUL_URL, {
    headers: {
      Authorization: `Bearer ${CTF_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
  })

  return client
}

export default createClient
