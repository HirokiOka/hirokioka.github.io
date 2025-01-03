import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import SkillTags from '../components/SkillTags';

const WorkCard = ({ title, description, imgSrc, url, tags }) => (
  <div className="cursor-pointer max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 p-3 border mt-2">
    <h2 className="font-bold text-xl mt-1 mb-2 text-center">{title}</h2>
    <Link href={url}>
      <img src={imgSrc} width={320} height={320} className="m-auto"/>
      <div className="px-6 py-2">
        <p className="text-gray-700 text-base">{description}</p>
        <div className="pt-4">
        <SkillTags tags={tags} />
        </div>
      </div>
    </Link>

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
            <h1 className='text-3xl font-bold px-2 pt-4 pb-2 italic underline'>RESEARCH</h1>
            <div className='px-8 grid grid-flow-col auto-cols-max'>
            
              <WorkCard 
                title="ProgTouch"
                description="プログラミング初心者が、自然言語で提示された選択肢を通じて問題解決力を養う学習支援システム。試行錯誤を繰り返すことで、プログラムの課題を解決し、アルゴリズムの理解を深める。大学講義での使用実績もあり、学生のスコア向上が確認された。"
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
                imgSrc="/images/SlashShot_system.jpg"
                url="/works/SlashShot"
                tags={['JavaScript', 'Node.js', 'Electron', 'Socket.io', 'MongoDB', 'Raspberry Pi']}
              />
            </div>
            <div className="px-8">
            <WorkCard 
              title="本へのプロジェクションによる読書体験拡張"
              description="ウェアラブルプロジェクタから紙の書籍に情報を投影し，読書体験を拡張するシステム"
              imgSrc="/images/book-proj.jpg"
              url="/works/BookProjection"
              tags={['Python', 'Processing', 'openCV']}
            />
            </div>
          </div>


        <div id="creative">
          <h1 className="text-3xl font-bold italic px-2 pt-8 pb-2 underline">CREATIVE</h1>
          <div className='px-8 grid grid-flow-col auto-cols-max'>

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


        <div id="collaborative">
          <h1 className="text-3xl italic font-bold px-2 pt-8 pb-2 underline">COLLABOLATIVE</h1>
          <div className='px-8 grid grid-flow-col auto-cols-max'>

            <WorkCard
              title="20th HMD Show"
              description="人間改造計画2024シンポジウムで開催されたHMDショーの統括・演出およびシステム実装を担当"
              imgSrc="/images/HMD_show.jpg"
              url="/works/HmdShow"
              tags={['openFrameworks', 'Sonic Pi']}
            />

            <WorkCard
              title="つぶやき書店"
              description="ユーザがTwitterでいいねしたtweetを分析し，それと内容の似た本をレコメンドすることで，まだ出会ったことのない本との「新しい出会い」を創出するWebアプリ "
              imgSrc="/images/tsubuyaki-syoten.jpg"
              url="/works/TsubuyakiSyoten"
              tags={['JavaScript', 'Vue.js', 'Python', 'Flask']}
            />
            <WorkCard
              title="Tozan King"
              description="神戸大学生の登校 (=登山) を題材とした高難易度ブラウザゲーム．" 
              imgSrc="/images/tozan_king.jpg"
              url="https://hirokioka.github.io/jump-game/"
              tags={['JavaScript', 'p5.js']}
            />

        </div>
      </div>

      <div id="other">
        <h1 className="text-3xl italic font-bold px-2 pt-8 pb-2 underline">OTHER</h1>
        <div className='px-8 grid grid-flow-col auto-cols-max'>

          <WorkCard
            title="JS_Typing"
            description="GitHub上のソースコードを題材に，写経しながらタイピング練習できるタイピングゲーム"
            imgSrc="/images/js_type.png"
            url="https://js-typing.adaptable.app/"
            tags={['JavaScript', 'Node.js']}
          />
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

    </div>

    </Layout>
  )
}
