import Head from 'next/head';
import Layout, { siteTitle, name } from '../../components/layout';
import ProjectDetail from '../../components/ProjectDetail';
import SkillTags from '../../components/SkillTags';
import ProjectImages from '../../components/ProjectImages';
import LinkList from '../../components/LinkList';
import Credit from '../../components/Credit';


export default function TsubuyakiSyoten() {
  const imageUrls = ["/images/tsubuyaki-syoten.jpg"];
  const tags = ['JavaScript', 'Vue.js', 'Python', 'Flask'];
  const projectTitle = "つぶやき書店";
  const productionYear = "2021";
  const projectDescription = "つぶやき書店は、あなたがTwitterでいいねしたツイートの内容から、潜在的な興味関心に沿った本をおすすめするWebアプリケーションです。まるで本屋をあてもなくぶらつきながら、ふと興味のある本が目に留まる運命的な出会い（セレンディピティ）を、普段何気なくいいねするツイートの内容から本をおすすめすることにより再現します。\n既存のECサイトに見られる購入履歴から本をおすすめする機能は、確かにあなたが読んだ本の傾向から興味関心に沿った本を推薦してくれます。しかし、それらの本はどれも似通っており，本屋に実際に行った時のような多様な本との能動的な出会いを得ることはできません。また、コロナウイルスの蔓延する昨今の状況下では、実際に本屋に足を運ぶことがはばかられ、本との偶然の出会い（セレンディピティ）を得る機会が減少しています。\nそこで、私たちはそのような偶然の出会い（セレンディピティ）をWeb上で体験できる機会を生み出すことを目指しました。";
  const otherLinks = ["https://hacku.yahoo.co.jp/hacku2021online2/"];
  const showMembers = [
    "Hiroki Oka",
    "Kai Washino",
    "Jinya Miyazaki",
    "Takahiro Fujii",
    "Yuka Hirose",
    "Ryosuke Terasaka",
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
            <SkillTags tags={tags} />
            <Credit members={showMembers} />
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
