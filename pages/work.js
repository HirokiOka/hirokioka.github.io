import Head from 'next/head'
//import img from 'next/image'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'

const WorkCard = ({ title, description, imgSrc, url, tags }) => (
  <div className="cursor-pointer max-w-sm rounded-lg overflow-hidden shadow-lg p-3 border mt-2">
    <h2 className="font-bold text-xl my-1 text-center">{title}</h2>
    <Link href={url}>
      <img src={imgSrc} width={320} height={320} className="m-auto" />
    </Link>
    <div className="px-6 py-2">
      <p className="text-gray-700 text-base">{description}</p>
      <div className="pt-4">
        {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-blue-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">
          #{tag}
          </span>
        ))}
      </div>
    </div>

  </div>
);

export default function Projects() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className='mt-4 md:p-6 sm:p-4'>
          <div id="research">
            <h1 className='text-3xl font-bold'>Research</h1>
            <div className='grid grid-flow-col auto-cols-max'>
            
              <WorkCard 
                title="ProgTouch"
                description="自然言語の選択によりスマホからプログラミングを学習するWebアプリケーション"
                imgSrc="/images/ProgTouch_img.png"
                url="https://prog-touch.vercel.app/"
                tags={['TypeScript', 'React', 'Next.js', 'PostgreSQL']}
              />
              <WorkCard 
                title="/Shot"
                description="ビジュアルプログラミングで対戦するプログラミング未経験者向けシューティングゲーム (神戸市立青少年科学館で展示中)"
                imgSrc="/images/SlashShot_system.png"
                url="https://www.kobe-kagakukan.jp/topics/archives/291"
                tags={['JavaScript', 'Node.js', 'Electron', 'Socket.io', 'MongoDB', 'Raspberry Pi']}
              />
            </div>
          </div>

        <div id="design">
          <h1 className="text-3xl font-bold">Web Design</h1>
          <div className='grid grid-flow-col auto-cols-max'>

            <WorkCard
              title="Ubiquitous Wearable Workshop"
              description="神戸大学塚本寺田研究室主催のワークショップページデザイン (2021-2023)"
              imgSrc="/images/uww-2023-hp.png"
              url="https://tt-lab.jp/uww2023/"
              tags={['JavaScript','TypeScript', 'React', 'Next.js']}
            />
            <WorkCard
              title="人間改造計画2024"
              description="神戸大学塚本寺田研究室20周年を記念に開催されたシンポジウムページのデザイン"
              imgSrc="/images/20th-hp.png"
              url="https://tt-lab.jp/20thanniv/"
              tags={['TypeScript', 'React', 'Next.js']}
            />
          </div>
      </div>

        <div id="other">
          <h1 className="text-3xl font-bold px-4 pt-4">Other</h1>
          <div className='grid grid-flow-col auto-cols-max'>

            <WorkCard
              title="Light-Keeper"
              description="神戸市のポートタワーをキャンバスに開催されたイベント「KobexDanceWeek」で展示したプロジェクション作品"
              imgSrc="/images/light_keeper.JPG"
              url="https://youtu.be/sySSGVPg_Q8"
              tags={['openFrameworks']}
            />
            <WorkCard
              title="p5 sketches"
              description="p5.jsを使ったクリエイティブコーディング作品集"
              imgSrc="/images/sketch.png"
              url="https://neort.io/Gt8eI4ixzzfU5PAG1jp6vX7qJNx2"
              tags={['JavaScript', 'p5.js']}
            />
            <WorkCard
              title="つぶやき書店"
              description="ユーザがTwitterでいいねしたtweetを分析し，それと内容の似た本をレコメンドすることで，まだ出会ったことのない本との「新しい出会い」を創出するWebアプリ"
              imgSrc="/images/tsubuyaki-syoten.png"
              url="https://tsubuyaki-syoten.onrender.com"
              tags={['JavaScript', 'Vue.js', 'Python', 'Flask']}
            />
            <WorkCard
              title="JS_Typing"
              description="GitHub上のソースコードをタイプしていくタイピングゲーム"
              imgSrc="/images/js_type.png"
              url="https://js-typing.onrender.com/"
              tags={['JavaScript', 'Node.js']}
            />
            <WorkCard
              title="Tozan King"
              description="某高難易度ゲームをモチーフにした2Dブラウザゲーム" 
              imgSrc="/images/tozan_king.png"
              url="https://hirokioka.github.io/jump-game/"
              tags={['JavaScript', 'p5.js']}
            />

        </div>
      </div>
    </div>

    </Layout>
  )
}
