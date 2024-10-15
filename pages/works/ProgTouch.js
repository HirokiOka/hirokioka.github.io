import Head from 'next/head';
import Layout, { siteTitle, name } from '../../components/layout';
import ProjectDetail from '../../components/ProjectDetail';
import ResearchPapers from '../../components/ResearchPapers';
import SkillTags from '../../components/SkillTags';
import ProjectImages from '../../components/ProjectImages';
import LinkList from '../../components/LinkList';


export default function ProgTouch() {
  const imageUrls = ["/images/ProgTouch_img.png", "/images/ProgTouch-flow.png"];
  const tags = ['TypeScript', 'React', 'Next.js', 'PostgreSQL'];
  const projectTitle = "ProgTouch";
  const productionYear = "2023-2024";
  const projectDescription = "プログラミング学習が一般的となった昨今では，さまざまな場面でプログラミング教育が実践されている.しかし，初学者にとってプログラミング学習はつまずきの連続である.特にプログラムを使った課題解決の方針を考えることや，その方針をプログラムコードを書いて実装するのが難しいことが学習障壁となり，試行錯誤が容易でないことが問題である．\nそこで本論文では，プログラミングを「課題の解決方針を立案すること」と「解決方針をコーディングすること」に分離し，前者のみに専念させることで高速な試行錯誤を可能にし，課題の解決方針を立てる能力を高める学習システムを提案する．提案システムを，スマートフォンからの利用を想定した Web アプリケーションとして実装し，ユーザが利用することでプログラム課題に取り組む際にどのような効果が得られるかを評価した．大学のプログラミング入門講義でシステムを運用した結果，システム使用率の高いユーザほどプログラム課題のスコアが高く，記述プログラム量が増えるという効果が得られた．";
  const projectPapers = [
    {
        author: "H. Oka, A. Ohnishi, T. Terada, and M. Tsukamoto",
        title: "A Choice-based Programming Learning Method to Develop Problem-Solving Skills",
        url: "https://ieeexplore.ieee.org/document/10637432",
        publication: "IEEE Access",
        volume: "Vol. 12",
        number: "",
        pages: "pp. 119550 -- 119562",
        date: "Aug. 2024"
    },
    {
        author: "岡 大貴, 大西鮎美, 西田健志, 寺田 努, 塚本昌彦",
        title: "プログラミング初学者の課題解決方針の立案能力を高める選択肢タップ式学習支援システム",
        url: 'https://www.wiss.org/WISS2023Proceedings/data/05.pdf',
        publication: "WISS2023",
        volume: "Vol.2023",
        number: "No. 100",
        pages: "pp. 34--40",
        date: "Nov. 2023"
    },
    {
        author: "岡 大貴, 大西鮎美, 西田健志, 寺田 努, 塚本昌彦",
        title: "プログラミング初学者の課題解決方針立案能力の向上に焦点をあてた選択肢タップ式学習システム",
        url: 'https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=228457&item_no=1&page_id=13&block_id=8',
        publication: "情報処理学会研究報告コンピュータと教育 (CE)",
        volume: "Vol.2023-CE-171",
        number: "No. 14",
        pages: "pp. 1--7",
        date: "Oct. 2023"
    },
  ];
  const otherLinks = [
    {
      title: "Webアプリ (スマホからのアクセス推奨)",
      url: "https://prog-touch.vercel.app/",
    },
    {
      title: "GitHub",
      url: "https://github.com/HirokiOka/prog-touch",
    },
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
            <ResearchPapers papers={projectPapers} />
            <SkillTags tags={tags} />
            <LinkList links={otherLinks} />
          </div>

          <div className="md:w-1/2 w-full px-4 py-12">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/1s2U6-m7KAQ?si=Y-Is0No7EpTCmvvP"
              title={projectTitle}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen>
            </iframe>
            <ProjectImages imageUrls={imageUrls} />
          </div>

        </div>
      </div>

    </Layout>
  );
}
