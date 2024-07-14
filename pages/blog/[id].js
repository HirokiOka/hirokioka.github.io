import Layout, { siteTitle } from '../../components/layout';
import Head from 'next/head';

export default function BlogId({ blog }) {
  if (!blog) {
    return <p>Loading...</p>; // データがない場合の処理
  }

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className='m-2 p-4 md:px-20'>
        <h1 className='font-bold md:pt-6 md:text-3xl sm:text-xl'>{blog.title}</h1>
        <p className='md:text-base sm:text-sm pb-6'>{blog.publishedAt}</p>
        <div className='md:text-base md:mx-20 sm:text-sm sm:m-1'
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
        />
      </div>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };

  const data = await fetch('https://hirokioka.microcms.io/api/v1/posts', key)
    .then(res => res.json())
    .catch(err => {
      console.error('Error fetching posts:', err);
      return null;
    });

  if (!data) {
    return { paths: [], fallback: false }; // データが取得できなかった場合の処理
  }

  const paths = data.contents.map(content => ({
    params: { id: content.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };

  const data = await fetch(
    'https://hirokioka.microcms.io/api/v1/posts/' + id,
    key
  ).then(res => res.json())
    .catch(err => {
      console.error('Error fetching post:', err);
      return null;
    });

  if (!data) {
    return {
      notFound: true, // データがない場合の404処理
    };
  }

  return {
    props: {
      blog: data,
    },
  };
};
