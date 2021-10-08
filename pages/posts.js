import Link from 'next/link'
import Head from 'next/head'
import Layout, {siteTitle, name} from '../components/layout'

export default function Posts({ blog }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1 className='text-4xl font-bold py-4'>Blog Posts</h1>
      <ul className='list-disc list-inside mx-3 text-xl pb-3'>
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

