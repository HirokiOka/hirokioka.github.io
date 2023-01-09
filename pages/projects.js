import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'

export default function Projects() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className='p-6'>
        <h1 className='text-4xl font-bold'>Personal Projects</h1>
        <div className='grid grid-flow-col auto-cols-max'>

          <div className="cursor-pointer max-w-sm rounded overflow-hidden shadow-lg p-3">
              <Link href="https://youtu.be/sySSGVPg_Q8">
                <img src="/images/light_keeper.JPG" /> 
              </Link>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Light-Keeper</div>
              <p className="text-gray-700 text-base">
                Interactive content with projection mapping
              </p>
            </div>
          </div>

          <div className="cursor-pointer max-w-sm rounded overflow-hidden shadow-lg p-3">
              <Link href="https://js-typing.onrender.com/">
                <img className="w-full" src="/images/js_type.png" alt="js typing" />
              </Link>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">JS_Typing</div>
              <p className="text-gray-700 text-base">
                JavaScript Typing game
              </p>
            </div>
          </div>

          <div className="cursor-pointer max-w-sm rounded overflow-hidden shadow-lg p-3">
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

      </div>

        <h1 className="text-4xl font-bold pt-2">Collaborative Projects</h1>
        <div className='grid grid-flow-col auto-cols-max'>
          <div className="cursor-pointer max-w-sm rounded overflow-hidden shadow-lg p-3">
              <Link href="https://tsubuyaki-syoten.onrender.com">
                <img src="/images/tsubuyaki-syoten.png" /> 
              </Link>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">tsubuyaki syoten</div>
              <p className="text-gray-700 text-base">
                Web app recommends books based on your twitter likes 
              </p>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}
