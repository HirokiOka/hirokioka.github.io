import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import homeStyles from '../styles/Home.module.css'
import Link from 'next/link'

export const name = 'Hiroki Oka'
export const siteTitle = 'HirokiOka Web'

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <meta
          name="description"
          content="this is Hiroki Oka's website"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        <nav className={styles.navWrapper}>
          <li>
            <Link href="/">
              <a className={styles.navItem}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className={styles.navItem}>About</a>
            </Link>
          </li>
          <li>
            <Link href="/works">
              <a className={styles.navItem}>Works</a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a className={styles.navItem}>Blog</a>
            </Link>
          </li>
        </nav>
      </header>
      <main>{children}</main>
        <footer className={styles.footer}>Copyright @ Hiroki Oka All Rights Reserved</footer> 
    </div>
  )
}

export default Layout
