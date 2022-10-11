import BlogPost from '../blocks/blog-post'
import { getBlogPostCollectionQuery } from '../services/contentful/api'

export default function Home({ data, error }) {
  return (
    <div>
      <h1>Post collection</h1>
      {data.items.map(({ title, content, slug }, index) => (
        <BlogPost key={index} title={title} content={content} slug={slug} />
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const { data, error } = await getBlogPostCollectionQuery()

  return {
    props: {
      data,
      error,
    },
    revalidate: 60,
  }
}
