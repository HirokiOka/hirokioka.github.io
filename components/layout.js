import Head from 'next/head';
import Link from 'next/link';
import { Noto_Sans_JP } from "next/font/google";

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
          content="This is Hiroki Oka's website."
        />
        <meta name="og:title" content={siteTitle} />
      </Head>

      <header className='bg-black text-white fixed top-0 w-full'>
        <nav className='m-4'>
          <Link href="/" className='font-bold sm:text-base sm:mx-1 md:text-4xl md:mx-4'>
            HirokiOka Web.
          </Link>
          <Link href="/about" className='hover:underline mx-2 md:mx-4 md:text-2xl sm:text-base'>About</Link>
          <Link href="/work" className='hover:underline mx-2 md:mx-4 md:text-2xl sm:text-base'>Work</Link>
          <Link href="/blog" className='hover:underline mx-2 md:mx-4 md:text-2xl sm:text-base'>Blog</Link>
        </nav>
      </header>

      <div className='py-12'>{children}</div>
        <footer className='text-center text-xl w-full py-2'>Copyright @ Hiroki Oka All Rights Reserved</footer> 
    </main>
  )
}

export default Layout;
