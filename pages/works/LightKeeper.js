import Head from 'next/head';
import Layout, { siteTitle, name } from '../../components/layout';
import ProjectDetail from '../../components/ProjectDetail';
import SkillTags from '../../components/SkillTags';
import ProjectImages from '../../components/ProjectImages';
import LinkList from '../../components/LinkList';


export default function LightKeeper() {
  const imageUrls = ["/images/light_keeper.JPG", "/images/LightKeeper_pix.jpg"];
  const tags = ['openFrameworks', 'Sonic Pi'];
  const projectTitle = "Light-Keeper";
  const productionYear = "2022";
  const projectDescription = "神戸ポートタワーをキャンバスに開催されたダンスイベント「KobexDanceWeek」で体験型展示として実装したプロジェクションコンテンツです．カメラの前に人が立ち，動くことでそれに対応して投影されているエフェクトやSEが変化します．4つのシーンが用意されており，時間経過で，対応したエフェクト・SEも変化していきます． \n\n実装の際は，神戸ポートタワーを使った体験型プロジェクションのため，体験者は神戸の象徴である神戸ポートタワーに映りたいが，直接投影されることは恥ずかしいだろうと考えました．そこで，カメラからエッジのみを切り出したり，映像にモザイクやパーティクルのエフェクトを加えたりして匿名化し，リアルタイムに投影しました．また，どう動くとどういう反応が起こるかということは説明せず，その場で動いてシステムとの対応を探らせることで，無意識的にダンスさせることを促しました．自分の体を動かしてプロジェクションの光を変化させる様子が灯台のように見えるため，灯台守である「Light-Keeper」というタイトルをつけました．\n\n投影コンテンツはC++フレームワークであるopenFrameworksで実装しました．音源制作も自分で行い，展示場所が公共空間であったため，BGMには波音を模したアンビエントなものを，プログラミング言語Rubyを使って音楽を作成するソフトウェアのSonic Piで作成しました．";
  const otherLinks = [
    {
      "title": "HP",
      "url": "https://tt-lab.jp/kobe_danceweek/index.html"
    },
    {
      "title": "GitHub",
      "url": "https://github.com/HirokiOka/light-keeper"
    },
    {
      "title": "BGM (SoundCloud)",
      "url": "https://soundcloud.com/mementoka/gazing-lighthouse?si=fc093e296395484080447fecdf8e2f71&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    }
];

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="m-2 p-4 md:px-20">

        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/2 w-full p-4">
            <ProjectDetail
              title={projectTitle}
              year={productionYear}
              description={projectDescription}
            />
            <div className="mx-6"><SkillTags tags={tags} /></div>
            <LinkList links={otherLinks} />
          </div>

          <div className="md:w-1/2 w-full px-4 py-12">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/sySSGVPg_Q8?si=rxmqh42_C3kVKVrz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <ProjectImages imageUrls={imageUrls} />
          </div>

        </div>
      </div>

    </Layout>
  );
}
