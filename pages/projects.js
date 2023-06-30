import Head from 'next/head'
import Image from 'next/image'
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
                <Image
                  src="/images/light_keeper.JPG"
                  unoptimized={true}
                  width={500}
                  height={500}
                /> 
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
                <Image
                  src="/images/js_type.png"
                  unoptimized={true}
                  width={500}
                  height={500}
                /> 
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
                <Image
                  src="/images/sketch.png"
                  unoptimized={true}
                  width={500}
                  height={500}
                /> 
              </Link>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">p5 sketches</div>
              <p className="text-gray-700 text-base">
                Creative Coding sketches
              </p>
            </div>
          </div>

      </div>

        <h1 className="text-4xl font-bold pt-4">Collaborative Projects</h1>
        <div className='grid grid-flow-col auto-cols-max'>
          <div className="cursor-pointer max-w-sm rounded overflow-hidden shadow-lg p-3">
              <Link href="https://tsubuyaki-syoten.onrender.com">
                <Image
                  src="/images/tsubuyaki-syoten.png"
                  unoptimized={true}
                  width={500}
                  height={500}
                /> 
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
