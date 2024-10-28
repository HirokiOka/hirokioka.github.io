import Head from 'next/head';
import Layout, { siteTitle, name } from '../../components/layout';
import ProjectDetail from '../../components/ProjectDetail';
import SkillTags from '../../components/SkillTags';
import ProjectImages from '../../components/ProjectImages';
import LinkList from '../../components/LinkList';
import Credit from '../../components/Credit';


export default function HmdShow() {
  const imageUrls = ["/images/HmdShow_screen.jpg"];
  const tags = ['openFrameworks', 'Sonic Pi'];
  const projectTitle = "HMD Show";
  const productionYear = "2024";
  const projectDescription = "神戸大学の塚本・寺田研究室設立20周年を記念し，開催された人間改造計画2024シンポジウム．ウェアラブル・ユビキタスコンピューティング研究に関する議論にとどまらず，近年の生成AI技術の発展も含め，広く人間の発展に関する議論がなされた．\n本イベント企画の一つである，最新のHMDをファッションコーディネートを交えて紹介するHMDショーの統括および背景アプリケーション実装を担当した．イベントロゴは赤色がメインであり，本年は塚本教授が還暦を迎える年でもあったため，赤色を基調としたかっこよさをコンセプトにショーを構成した．";
  const otherLinks = [
    {
      "title": "GitHub",
      "url": "https://github.com/HirokiOka/hmd-backdrop"
    },
    {
      "title": "HP",
      "url": "https://tt-lab.jp/20thanniv/"
    },
    {
      "title": "BGM (SoundCloud)",
      "url": "https://soundcloud.com/mementoka/hmd-human-machine-drive?si=a9996a5c38764cad955739444fc3f785&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    },
  ];
  const showMembers = [
    "岡 大貴",
    "京極太一",
    "松井菜摘",
    "宮嶋 佑輔",
    "宇都宮 叶大",
    "柴田拓磨",
    "水谷元紀",
    "Salman Suwandi",
    "森崎勇輝",
    "望月万里衣",
    "長尾悠生",
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
            <Credit members={showMembers} />
          </div>

          <div className="md:w-1/2 w-full px-4 py-12">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/9a2aqYyi790?si=GqpRdALe8NuCqDk1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <ProjectImages imageUrls={imageUrls} />
          </div>

        </div>
      </div>

    </Layout>
  );
}
