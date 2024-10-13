import Head from 'next/head';
import Layout, { siteTitle, name } from '../../components/layout';
import ProjectDetail from '../../components/ProjectDetail';
import SkillTags from '../../components/SkillTags';
import ProjectImages from '../../components/ProjectImages';
import LinkList from '../../components/LinkList';


export default function LightKeeper() {
  const imageUrls = ["/images/light_keeper.JPG", "/images/LightKeeper_pix.png"];
  const tags = ['openFrameworks', 'Sonic Pi'];
  const projectTitle = "Light-Keeper";
  const productionYear = "2022";
  const projectDescription = "神戸ポートタワーをキャンバスに開催されたイベント「KobexDanceWeek」で体験型展示として実装したプロジェクションコンテンツ．カメラの前に人が立ち，動くことで投影されているエフェクトやSEが変化する．4つのシーンが用意されており，時間経過で，それに対応したエフェクト・SEも変化していく．\n神戸ポートタワーを使った体験型プロジェクションのため，体験者は神戸の象徴である神戸ポートタワーに映りたいが，直接投影されることは恥ずかしいだろうと考え，カメラからエッジのみを切り出したり，モザイク化することで匿名化して投影．また，どう動くとどういう反応が起こるかということは説明せず，その場で動いてシステムとの対応を探らせることで，無意識的にダンスさせることを促した．自分の体を動かしてプロジェクションの光を変化させる様子が灯台のように見えるため，灯台守である「Light-Keeper」というタイトルをつけた．\n展示場所が公共空間であったため，BGMには波音を模したアンビエントなものをSonic Piで作成し使用した．";
  const otherLinks = ["https://tt-lab.jp/kobe_danceweek/index.html"];

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
            <SkillTags tags={tags} />
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
