import Head from 'next/head';
import Layout, { siteTitle, name } from '../../components/layout';
import ProjectDetail from '../../components/ProjectDetail';
import SkillTags from '../../components/SkillTags';
import ProjectImages from '../../components/ProjectImages';
import LinkList from '../../components/LinkList';

export default function BookProjection() {
  const imageUrls = [
    "/images/BookProjection_device.jpg",
    "/images/BookProjection_system.png",
    "/images/BookProjection_example.jpg",
  ];
  const tags = ['Python', 'Processing', 'openCV'];
  const projectTitle = "本へのプロジェクションによる読書体験拡張";
  const productionYear = "2018-2019";
  const projectDescription = "このプロジェクトでは，電子書籍の利便性を取り入れつつ，紙の本の持つ質感や読みやすさを維持したいという背景から，紙の書籍の読書体験を拡張するために，ウェアラブルなプロジェクションマッピングデバイスを実装・提案しました．\nシステムは，カメラ，モバイルプロジェクタ，LeapMotion，PCで構成され，紙の書籍上に辞書検索や関連画像などの情報をプロジェクションマッピングします．読者が分からない単語の意味や関連画像を調べる際，読書を中断することなくジェスチャによって情報が本に投影されます．\n評価実験では，操作性やトラッキングの精度に改善の余地が見られましたが，情報をすぐに調べられる点が便利と評価されました．このシステムは，よりユーザビリティを高めることで，紙の書籍に新たな価値を提供することが期待できます．";
  const otherLinks = [
    {
      "title": "論文",
      "url": "https://drive.google.com/drive/u/0/folders/1arQthlk7_W19rMWrj95iYP-YIohr6bhF"
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
            <ProjectImages imageUrls={imageUrls} />
          </div>

        </div>
      </div>

    </Layout>
  );
}
