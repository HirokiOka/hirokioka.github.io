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
  const projectDescription = "ProgTouchは，プログラミング初心者がプログラムを通じて問題解決力を養うことを目的とした学習支援システムです．一般的なプログラミング教育では，コードの実装や文法の理解に時間がかかり，問題解決に集中できないという課題がありました．このシステムでは，プログラミングコードを記述するのではなく，自然言語で提示された選択肢から解決策を選ぶことで，短時間で試行錯誤を繰り返し，問題解決のプロセスに集中できる環境を提供します．\n主な機能として，ユーザーは解決策の選択肢を自然言語で選ぶことで，プログラムの課題を段階的に解決できます．また，選択した内容に基づいて自動的にコードがサジェストされ，実行結果を確認することができます．このシステムは特に，プログラミングの初学者がアルゴリズムや問題解決のステップを理解しやすくするためのものです．\n実際の大学のプログラミング講義での運用を通じて，受講者が試行錯誤を繰り返すことで，問題解決能力の向上が確認されました．システム利用と学生のスコア・記述プログラム行数に相関があり，システムの使用頻度が高いほどプログラムの量やスコアが向上することが示されました．";
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
          <div className="mx-8"><SkillTags tags={tags} /></div>
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
