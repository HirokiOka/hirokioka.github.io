import Layout, { siteTitle } from '../../components/layout'
import Head from 'next/head'

export default function BlogId({ blog }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1 className='text-4xl font-bold py-4'>{blog.title}</h1>
      <p className='text-2xl font-bold'>{blog.publishedAt}</p>
      <div className='text-xl'
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
    </Layout>
  )
}

export const getStaticPaths = async() => {
  const key = {
    headers: { 'X-API-KEY': 'f681de22-36fe-4cec-a4de-a362ba6285ba' },
  }
  const data = await fetch('https://hirokioka.microcms.io/api/v1/posts', key)
    .then(res => res.json())
    .catch(() => null)
  const paths = data.contents.map(content => `/blog/${content.id}`);
  return { paths, fallback: false }
};

export const getStaticProps = async(context) => {
  const id = context.params.id
  const key = {
    headers: { 'X-API-KEY': 'f681de22-36fe-4cec-a4de-a362ba6285ba' },
  }
  const data = await fetch(
    'https://hirokioka.microcms.io/api/v1/posts/' + id,
    key,
  ).then(res => res.json())
   .catch(() => null)

  return {
    props: {
      blog: data
    },
  };
};

