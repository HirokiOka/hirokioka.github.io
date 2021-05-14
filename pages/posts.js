import Link from 'next/link'
import Layout from '../components/layout'

export default function Posts({ blog }) {
  return (
    <Layout>
      <h1>Blog Posts</h1>
      <ul>
        {blog.map(blog => (
          <li key={blog.id}>
            <Link href={`blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const getStaticProps = async() => {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const data = await fetch('https://hirokioka.microcms.io/api/v1/posts', key).then(res => res.json())
    .catch(() => null);
  return {
    props: {
      blog: data.contents,
    },
  };
};

