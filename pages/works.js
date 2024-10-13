import Head from 'next/head'
//import img from 'next/image'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'

const WorkCard = ({ title, description, imgSrc, url, tags }) => (
  <div className="cursor-pointer max-w-sm rounded-lg overflow-hidden shadow-lg p-3 border mt-2">
    <h2 className="font-bold text-xl my-1 text-center">{title}</h2>
    <Link href={url} target="_blank">
      <img src={imgSrc} width={320} height={320} className="m-auto"/>
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
            <h1 className='text-2xl font-bold px-2 pt-4'>Research Project</h1>
            <div className='grid grid-flow-col auto-cols-max'>
            
              <WorkCard 
                title="ProgTouch"
                description="プログラミング言語を使ってプログラミングするのではなくではなく，クイズを解くように日本語で表現された選択肢を選択し試行錯誤することで，プログラミング初学者の思考力を培うプログラミング学習アプリケーション．"
                imgSrc="/images/ProgTouch_img.png"
                url="/works/ProgTouch"
                tags={['TypeScript', 'React', 'Next.js', 'PostgreSQL']}
              />
              <WorkCard 
                title="LiveCodeSTG"
                description="シューティングゲームでプログラマがプログラミングで対戦することで，プログラマのすごさやかっこよさを可視化するプログラミングゲーム"
                imgSrc="/images/liveCodeSTG.png"
                url="/works/LiveCodeSTG"
                tags={['JavaScript', 'Node.js', 'Socket.io']}
              />
              <WorkCard 
                title="/Shot"
                description="LiveCodeSTGをもとに，プログラミング未経験者でもブロックプログラミングで対戦ゲームができるプログラミングゲーム．現在，神戸市立青少年科学館で展示中．"
                imgSrc="/images/SlashShot_system.png"
                url="/works/SlashShot"
                tags={['JavaScript', 'Node.js', 'Electron', 'Socket.io', 'MongoDB', 'Raspberry Pi']}
              />
            </div>
            <WorkCard 
              title="本へのプロジェクションによる読書体験拡張"
              description="ウェアラブルプロジェクタから紙の書籍に情報を投影し，読書体験を拡張するシステム"
              imgSrc="/images/book-proj.jpg"
              url="https://drive.google.com/drive/u/0/folders/1arQthlk7_W19rMWrj95iYP-YIohr6bhF"
              tags={['Python', 'Processing', 'openCV']}
            />
          </div>


        <div id="creative">
          <h1 className="text-2xl font-bold px-2 pt-4">Creative Project</h1>
          <div className='grid grid-flow-col auto-cols-max'>

            <WorkCard
              title="Light-Keeper"
              description="神戸ポートタワーをキャンバスに開催されたイベント「KobexDanceWeek」で展示したプロジェクション作品．用意されたカメラ前に人が立ち，動くことでエフェクトやSEが変化する．無意識的に人をダンスさせ，ポートタワーの光となって神戸を照らさせる．"
              imgSrc="/images/light_keeper.JPG"
              url="/works/LightKeeper"
              tags={['openFrameworks', 'Sonic Pi']}
            />
            <WorkCard
              title="How to behave?"
              description="Light-Keeperをもとに実装した屋内展示用インタラクティブ作品．ProcessingCommunityDay2023にて展示"
              imgSrc="/images/howToBehave.png"
              url="https://youtu.be/ydcIlOPgkBE"
              tags={['openFrameworks', 'Sonic Pi']}
            />
            <WorkCard
              title="p5 sketches"
              description="p5.jsを使ったクリエイティブコーディング習作集"
              imgSrc="/images/sketch.png"
              url="https://neort.io/Gt8eI4ixzzfU5PAG1jp6vX7qJNx2"
              tags={['JavaScript', 'p5.js']}
            />

          </div>
        </div>

        <div id="design">
          <h1 className="text-2xl font-bold px-2 pt-4">Web Design</h1>
          <div className='grid grid-flow-col auto-cols-max'>

            <WorkCard
              title="Ubiquitous Wearable Workshop"
              description="ユビキタス・ウェアラブル・ワークショップのWebページ実装 (2021-2023)"
              imgSrc="/images/uww-2023-hp.png"
              url="https://tt-lab.jp/uww2023/"
              tags={['JavaScript','TypeScript', 'React', 'Next.js']}
            />
            <WorkCard
              title="人間改造計画2024"
              description="神戸大学塚本寺田研究室20周年を記念に開催されたシンポジウムページの実装"
              imgSrc="/images/20th-hp.png"
              url="https://tt-lab.jp/20thanniv/"
              tags={['TypeScript', 'React', 'Next.js']}
            />
          </div>
      </div>


        <div id="other">
          <h1 className="text-2xl font-bold px-2 pt-4">Other</h1>
          <div className='grid grid-flow-col auto-cols-max'>

            <WorkCard
              title="Tsukaken 20th Anniversary HMD Show"
              description="神戸大学塚本寺田研究室20周年記念式典で開催されたHMDショーの統括・演出およびシステム実装を担当"
              imgSrc="/images/HMD_show.jpg"
              url="https://youtu.be/9a2aqYyi790?si=5Phzx87FOx_FeF90"
              tags={['openFrameworks', 'Sonic Pi']}
            />

            <WorkCard
              title="つぶやき書店"
              description="ユーザがTwitterでいいねしたtweetを分析し，それと内容の似た本をレコメンドすることで，まだ出会ったことのない本との「新しい出会い」を創出するWebアプリ (🚧現在X API対応のため工事中🚧)"
              imgSrc="/images/tsubuyaki-syoten.png"
              url="https://tsubuyaki-syoten.adaptable.app/"
              tags={['JavaScript', 'Vue.js', 'Python', 'Flask']}
            />
            <WorkCard
              title="JS_Typing"
              description="GitHub上のソースコードを題材に，写経しながらタイピング練習できるタイピングゲーム"
              imgSrc="/images/js_type.png"
              url="https://js-typing.adaptable.app/"
              tags={['JavaScript', 'Node.js']}
            />
        </div>
            <WorkCard
              title="Tozan King"
              description="神戸大学生の登校 (=登山) を題材とした高難易度ブラウザゲーム．" 
              imgSrc="/images/tozan_king.png"
              url="https://hirokioka.github.io/jump-game/"
              tags={['JavaScript', 'p5.js']}
            />

      </div>
    </div>

    </Layout>
  )
}
