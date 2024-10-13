import Head from 'next/head';
import Layout, { siteTitle, name } from '../../components/layout';
import ProjectDetail from '../../components/ProjectDetail';
import ResearchPapers from '../../components/ResearchPapers';
import SkillTags from '../../components/SkillTags';
import ProjectImages from '../../components/ProjectImages';
import LinkList from '../../components/LinkList';


export default function SlashShot() {
  const imageUrls = ["/images/SlashShot_system.jpg", "/images/SlashShot_game.png", "/images/SlashShot_interface.png"];
  const tags = ['JavaScript', 'Node.js', 'Electron', 'Socket.io', 'MongoDB', 'Raspberry Pi'];
  const projectTitle = "/Shot";
  const productionYear = "2023-2024";
  const projectDescription = "プログラミングは魅力的である．コンピュータに向かって試行錯誤しながら，思考をプログラミング言語で表現するプログラマの姿は格好良く，憧れるものである．しかし，プログラミングを経験したことのない人にとって，プログラマの格好良さは伝わりづらい．プログラミングの魅力は自分でプログラミングをしてみなければ感じづらく，最初から楽しさを感じやすいゲームやスポーツとは違い，プログラミングの楽しさは習熟が進むまで実感することが難しい．また，プログラマが実際にプログラミングしている様子を見る機会は少ないため，未経験者がプログラミングという行為をイメージしづらいことも格好良さが伝わりづらい原因である．我々はこれまで，プログラマ同士がプログラミングでキャラクタを制御し戦う対戦型プログラミングゲームを開発し，習熟したプログラマの凄さを可視化することで，初学者の興味喚起を目指してきた．しかし，このゲームは習熟したプログラマが実際にJavaScriptプログラムを記述して対戦するものであり，初学者や未経験者が実際にプレイすることは難しく，プログラマ同士の高度なプログラムを見ることで逆にプログラミングの難しさを感じてしまうという課題があった．このプロジェクトでは，プログラミング経験者にプログラミングの格好良さについてアンケート調査を行い，プログラミングの格好良さを要素化した．そして，この要素を未経験者でも体感できるように対戦型プログラミングゲームとして実装し，システムを体験型展示として運用している．提案システムは，テキストベースのプログラミング言語でプレイさせるのではなく，機能を絞ったブロックベースのプログラミングインタフェースを備えている．";
  const otherLinks = ["https://www.kobe-u.ac.jp/ja/announcement/2023_11_01_01/"];
  const projectPapers = [
    {
        author: "H. Oka, A. Ohnishi, T. Terada, and M. Tsukamoto",
        title: "Competitive Programming Game to Promote Programming Motivation for Non-Programmers by Highlighting Programmer Coolness",
        publication: "Proc. of 18th International Workshop on Informatics (IWIN2024)",
        volume: "Vol.2024",
        date: "to appear (2024)"
    },
    {
        author: "岡 大貴, 大西鮎美, 西田健志, 寺田 努, 塚本昌彦",
        title: "プログラマの格好良さを見せることで未経験者のプログラミングに対する意欲を高める対戦ゲーム",
        url: 'https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=234514&item_no=1&page_id=13&block_id=8',
        publication: "情報処理学会研究報告エンタテインメントコンピューティング (EC)",
        volume: "Vol.2024-EC-72",
        number: "No. 6",
        pages: "pp. 1--7",
        date: "May. 2024"
    },
    {
        author: "岡 大貴, 大西鮎美, 西田健志, 寺田 努, 塚本昌彦",
        title: "プログラミング未経験者の興味喚起を目的としたタップ式プログラミングゲームの提案",
        publication: "ユビキタス・ウェアラブルワークショップ2023論文集",
        volume: "Vol.2023",
        pages: "p. 7",
        date: "Dec. 2023"
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
          <div className="mx-8 mt-4">
            <LinkList links={otherLinks} />
          </div>
        </div>

        <div className="md:w-1/2 w-full px-4 py-12">
          <ProjectImages imageUrls={imageUrls} />
        </div>


      </div>
    </div>

    </Layout>
  );
}
