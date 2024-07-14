import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import SketchComponent from '../components/SketchComponent';

export default function Home() {
  return (
    <div className='bg-black text-white'>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
      <SketchComponent />
      </Layout>
    </div>
  );
}

