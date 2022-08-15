import Head from 'next/head'
import Link from 'next/link'

export const name = 'Hiroki Oka'
export const siteTitle = 'HirokiOka Web'

function Layout({ children, home }) {
  return (
    <div className='font-display'>
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
            <Link href="/">
              <a className='m-2 text-3xl'>HirokiOka Web.</a>
            </Link>
            <Link href="/about">
              <a className='mx-4 hover:underline text-2xl'>About</a>
            </Link>
            <Link href="/projects">
              <a className='mx-4 hover:underline text-2xl'>Projects</a>
            </Link>
            <Link href="/posts">
              <a className='mx-4 hover:underline text-2xl'>Blog</a>
            </Link>
        </nav>
      </header>
      <main className='py-12 font-sans'>{children}</main>
        <footer className='text-center text-xl w-full py-2'>Copyright @ Hiroki Oka All Rights Reserved</footer> 
    </div>
  )
}

export default Layout
