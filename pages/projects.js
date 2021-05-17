import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/utils.module.css'
import hStyles from '../styles/Home.module.css'

export default function Projects() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>Projects</h1>
        <p className={hStyles.card}>
          <Link href="https://js-typing.herokuapp.com/">
            <img src="/images/js_type.png" /> 
          </Link>
            JavaScript Typing game
        </p>
        <p className={hStyles.card}>
          <Link href="https://gh-app.herokuapp.com/">
            <img src="/images/gh_app.png" /> 
          </Link>
            quiz and fortune telling game using codes
        </p>
        <p className={hStyles.card}>
          <Link href="https://neort.io/Gt8eI4ixzzfU5PAG1jp6vX7qJNx2">
            <img src="/images/sketch.png" /> 
          </Link>
            Creative Coding sketches
        </p>
    </Layout>
  )
}
