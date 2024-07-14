import Link from 'next/link';
import Head from 'next/head';
import Layout, { siteTitle, name } from '../components/layout';

export default function Blog({ blogs }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className='md:p-6 sm:p-4'>
        <h1 className='text-3xl font-bold m-2'>Blog Posts</h1>
        <ul className='list-disc list-inside mx-3 text-base pb-3'>
          {blogs && blogs.map(blog => (
            <li key={blog.id} className='hover:underline'>
              <Link href={`blog/${blog.id}`}>
                {blog.title} ({blog.publishedAt.split('T')[0]})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export const getStaticProps = async() => {
  const key = {
    headers: {'X-API-KEY': 'f681de22-36fe-4cec-a4de-a362ba6285ba'},
  };
  const data = await fetch('https://hirokioka.microcms.io/api/v1/posts', key).then(res => res.json())
    .catch(() => null);
  return {
    props: {
      blogs: data.contents,
    },
  };
};

