import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'

export default function Projects() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1 className='text-4xl font-bold py-4'>Projects</h1>

      <div className="max-w-sm rounded overflow-hidden shadow-lg py-2">
          <Link href="https://js-typing.herokuapp.com/">
            <img className="w-full" src="/images/js_type.png" alt="js typing" />
          </Link>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">JS_Typing</div>
          <p className="text-gray-700 text-base">
            JavaScript Typing game
          </p>
        </div>
      </div>

      <div className="max-w-sm rounded overflow-hidden shadow-lg py-2">
          <Link href="https://gh-app.herokuapp.com/">
            <img src="/images/gh_app.png" /> 
          </Link>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">GitHub App</div>
          <p className="text-gray-700 text-base">
            quiz and fortune telling game using codes
          </p>
        </div>
      </div>

      <div className="max-w-sm rounded overflow-hidden shadow-lg py-2">
          <Link href="https://neort.io/Gt8eI4ixzzfU5PAG1jp6vX7qJNx2">
            <img src="/images/sketch.png" /> 
          </Link>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">p5 sketches</div>
          <p className="text-gray-700 text-base">
            Creative Coding sketches
          </p>
        </div>
      </div>

    </Layout>
  )
}
