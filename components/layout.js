import Head from 'next/head';
import Link from 'next/link';
import { Noto_Sans_JP } from '@next/font/google';

const notoSansJapanese = Noto_Sans_JP({
  weight: '400',
  preload: false,
});

export const name = 'Hiroki Oka';
export const siteTitle = 'HirokiOka Web';

function Layout({ children, home }) {
  return (
    <main className={notoSansJapanese.className}>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <meta
          name="description"
          content="this is Hiroki Oka's website"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className='bg-black text-white fixed top-0 w-full'>
        <nav className='m-4'>
            <Link href="/" className='m-2 text-3xl'>
              HirokiOka Web.
            </Link>
            <Link href="/about" className='mx-4 hover:underline text-2xl'>About</Link>
            <Link href="/projects" className='mx-4 hover:underline text-2xl'>Projects</Link>
            <Link href="/posts" className='mx-4 hover:underline text-2xl'>Blog</Link>
        </nav>
      </header>
      <div className='py-12'>{children}</div>
        <footer className='text-center text-xl w-full py-2'>Copyright @ Hiroki Oka All Rights Reserved</footer> 
    </main>
  )
}

export default Layout;
