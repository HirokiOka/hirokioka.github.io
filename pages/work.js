import Head from 'next/head'
//import img from 'next/image'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'

export default function Projects() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className='md:p-6 sm:p-4'>
        <h1 className='text-3xl font-bold'>Research Projects</h1>
        <div className='grid grid-flow-col auto-cols-max'>

          <div className="cursor-pointer max-w-sm rounded overflow-hidden shadow-lg p-3">
              <Link href="https://prog-touch.vercel.app/">
                <img
                  src="/images/ProgTouch_img.png"
                  width={500}
                  height={500}
                /> 
              </Link>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">ProgTouch</div>
              <p className="text-gray-700 text-base">
                自然言語の選択によりスマホからプログラミングを学習するWebアプリケーション
              </p>
            </div>
          </div>

          <div className="cursor-pointer max-w-sm rounded overflow-hidden shadow-lg p-3">
              <Link href="https://www.kobe-kagakukan.jp/topics/archives/291">
                <img
                  src="/images/SlashShot_system.png"
                  width={500}
                  height={500}
                /> 
              </Link>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">/Shot</div>
              <p className="text-gray-700 text-base">
                ビジュアルプログラミングで対戦するプログラミング未経験者向けシューティングゲーム (神戸市立青少年科学館で展示中)
              </p>
            </div>
          </div>

        </div>


        <h1 className="text-3xl font-bold px-4 pt-4">Other</h1>

        <div className='grid grid-flow-col auto-cols-max'>

          <div className="cursor-pointer max-w-sm rounded overflow-hidden shadow-lg p-3">
              <Link href="https://youtu.be/sySSGVPg_Q8">
                <img
                  src="/images/light_keeper.JPG"
                  width={500}
                  height={500}
                /> 
              </Link>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Light-Keeper</div>
              <p className="text-gray-700 text-base">
                神戸市のポートタワーをキャンバスに開催されたイベント「KobexDanceWeek」で展示したプロジェクション作品
              </p>
            </div>
          </div>


          <div className="cursor-pointer max-w-sm rounded overflow-hidden shadow-lg p-3">
              <Link href="https://neort.io/Gt8eI4ixzzfU5PAG1jp6vX7qJNx2">
                <img
                  src="/images/sketch.png"
                  width={500}
                  height={500}
                /> 
              </Link>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">p5 sketches</div>
              <p className="text-gray-700 text-base">
                p5.jsを使ったクリエイティブコーディング作品集
              </p>
            </div>
          </div>

          <div className="cursor-pointer max-w-sm rounded overflow-hidden shadow-lg p-3">
              <Link href="https://tsubuyaki-syoten.onrender.com">
                <img
                  src="/images/tsubuyaki-syoten.png"
                  width={500}
                  height={500}
                /> 
              </Link>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">つぶやき書店</div>
              <p className="text-gray-700 text-base">
                ユーザがTwitterでいいねしたtweetを分析し，それと内容の似た本をレコメンドすることで，まだ出会ったことのない本との「新しい出会い」を創出するWebアプリ
              </p>
            </div>
          </div>

          <div className="cursor-pointer max-w-sm rounded overflow-hidden shadow-lg p-3">
              <Link href="https://js-typing.onrender.com/">
                <img
                  src="/images/js_type.png"
                  width={500}
                  height={500}
                /> 
              </Link>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">JS_Typing</div>
              <p className="text-gray-700 text-base">
                GitHub上のソースコードをタイプしていくタイピングゲーム
              </p>
            </div>
          </div>

          <div className="cursor-pointer max-w-sm rounded overflow-hidden shadow-lg p-3">
              <Link href="https://neort.io/Gt8eI4ixzzfU5PAG1jp6vX7qJNx2">
                <img
                  src="/images/tozan_king.png"
                  width={500}
                  height={500}
                /> 
              </Link>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Tozan King</div>
              <p className="text-gray-700 text-base">
                某高難易度ゲームをモチーフにした2Dブラウザゲーム
              </p>
            </div>
          </div>
      </div>
    </div>

    </Layout>
  )
}
