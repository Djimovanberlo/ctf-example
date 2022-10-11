import getData from './get-data'
import { blogPostCollectionQuery } from '../queries/blog-post-collection'
import { blogPostDetailQuery } from '../queries/blog-post-detail'

export const getBlogPostCollectionQuery = async () => {
  return await getData(blogPostCollectionQuery)
}

export const getBlogPostDetailQuery = async slug => {
  return await getData(blogPostDetailQuery(slug))
}
