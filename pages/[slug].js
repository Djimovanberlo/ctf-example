import Link from 'next/link'
import { getBlogPostCollectionQuery, getBlogPostDetailQuery } from '../services/contentful/api'

export default function SlugPage({ data, error }) {
  const { title, content } = data
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      <Link href='/'>Go back home</Link>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const { data, error } = await getBlogPostDetailQuery(params.slug)

  return {
    props: {
      data: data?.items[0],
      error,
    },
    revalidate: 60,
  }
}

export async function getStaticPaths() {
  const { data } = await getBlogPostCollectionQuery()
  const paths = data.items.map(({ slug }) => {
    return {
      params: {
        slug,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}
