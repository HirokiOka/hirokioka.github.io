import Head from 'next/head';
import Layout, { siteTitle, name } from '../../components/layout';
import ProjectDetail from '../../components/ProjectDetail';
import ResearchPapers from '../../components/ResearchPapers';
import SkillTags from '../../components/SkillTags';
import ProjectImages from '../../components/ProjectImages';
import LinkList from '../../components/LinkList';


export default function LiveCodeSTG() {
  const imageUrls = ["/images/liveCodeSTG.png"];
  const tags = ['JavaScript', 'Node.js', 'Socket.io'];
  const projectTitle = "LiveCodeSTG";
  const productionYear = "2020";
  const projectDescription = "近年、自然言語の読み書きや運動と同様に、誰もがある程度プログラミングのスキルや考え方を身につけるべきだと考えられている。その代表的な例が、2020年度から小学校でプログラミング教育が必修化されたことである。現代では、IoTデバイスやスマートスピーカーなど、コンピュータと密接に関わる技術が急速に普及しており、プログラミングやコンピュータの仕組みを理解せずに、設計者が何を考えて実装しているかをブラックボックス化することは問題である。\n\nしかし、プログラミングは読み書きや運動とは異なり、その楽しさを実感するまでに習熟が必要であるため、初心者には楽しさを感じにくいという課題がある。例えば、小説やプロスポーツのファインプレーは、初心者でも心を動かされ、それに憧れを持つが、プログラミングにはそのような機会が少ないのが現状である。これまでにもプログラミング力を競うゲームは開発されてきたが、プログラミング初心者が観戦して楽しめるものは少ない。\n\n本研究では、プログラマが技術を競い合い、さらに初心者でも観戦を楽しめるプログラミングゲームを開発することを目指した。競技性と観戦性を兼ね備えたゲームを通じて、プログラマへの憧れを抱かせ、プログラミングに対する興味を喚起することを目指す。ゲームの設計指針としては、\n(1)プログラミングの魅力を見せるデザイン、\n(2)戦略の多様性、\n(3)リアルタイムでの駆け引きとアドリブの要素を取り入れる\nことが挙げられる。";
  const projectPapers = [
    {
        author: "岡 大貴, 西田健志",
        title: "競技性・観戦性を拡張したプログラミングゲームの提案",
        url: 'https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=206553&item_no=1&page_id=13&block_id=8',
        publication: "エンタテインメントコンピューティングシンポジウム2020論文集",
        volume: "Vol. 2020",
        pages: "pp.166--169",
        date: "Sep. 2020"
    },
  ];
  const otherLinks = [
    {
      title: "Webアプリ",
      url: "https://livecodestg.adaptable.app/"
    },
    {
      title: "GitHub",
      url: "https://github.com/HirokiOka/liveCodeSTG"
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
          <ResearchPapers papers={projectPapers} />
          <div className="mx-4"><SkillTags tags={tags} /></div>
          <LinkList links={otherLinks} />
        </div>

        <div className="md:w-1/2 w-full px-4 py-12">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/qmMlD-8lPWo?si=O1gdhV7NUhU72PB-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <ProjectImages imageUrls={imageUrls} />
        </div>

      </div>
    </div>

    </Layout>
  );
}
