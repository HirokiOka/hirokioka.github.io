import Layout, { siteTitle } from '../../components/layout';
import Head from 'next/head';

export default function BlogId({ blog }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className='m-2 p-4 md:px-20'>
        <h1 className='font-bold md:pt-6 md:text-3xl sm:text-xl'>{blog.title}</h1>
        <p className='md:text-base sm:text-sm pb-6'>{blog.publishedAt}</p>
        <div className='md:text-base md:mx-20 sm:text-sm sm:m-1 '
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
        />
      </div>
    </Layout>
  )
}

export const getStaticPaths = async() => {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  }
  const data = await fetch('https://hirokioka.microcms.io/api/v1/posts', key)
    .then(res => res.json())
    .catch(() => null);
  const paths = data.contents.map(content => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async(context) => {
  const id = context.params.id;
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const data = await fetch(
    'https://hirokioka.microcms.io/api/v1/posts/' + id,
    key,
  ).then(res => res.json())
   .catch(() => null);

  return {
    props: {
      blog: data
    },
  };
};

