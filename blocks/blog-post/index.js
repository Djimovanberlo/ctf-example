import Link from 'next/link'

import styles from './index.module.css'

const BlogPost = ({ title, content, slug }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p className={styles.content}>{content}</p>
      <Link href={slug}>Read more</Link>
    </div>
  )
}

export default BlogPost
