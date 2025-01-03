import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle, name } from '../components/layout';

const reviewPapers = [
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
];

const researchPapers = [
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
        title: "プログラミング初学者の課題解決方針立案能力の向上に焦点をあてた選択肢タップ式学習システム",
        url: 'https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=228457&item_no=1&page_id=13&block_id=8',
        publication: "情報処理学会研究報告コンピュータと教育 (CE)",
        volume: "Vol.2023-CE-171",
        number: "No. 14",
        pages: "pp. 1--7",
        date: "Oct. 2023"
    },
    {
        author: "岡 大貴, 大西鮎美, 寺田 努, 塚本昌彦",
        title: "マルチモーダル情報を用いたプログラミング時のつまずき検出手法の提案",
        url: 'https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=217428&item_no=1&page_id=13&block_id=8',
        publication: "情報処理学会研究報告ヒューマンコンピュータインタラクション (HCI)",
        volume: "Vol. 2022-HCI-197",
        number: "No. 9",
        pages: "pp. 1–7",
        date: "Mar. 2022"
    },
    {
        author: "岡 大貴, 西田健志",
        title: "競技性・観戦性を拡張したプログラミングゲームの提案",
        url: 'https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=206553&item_no=1&page_id=13&block_id=8',
        publication: "エンタテインメントコンピューティングシンポジウム2020論文集",
        volume: "Vol. 2020",
        pages: "pp.166--169",
        date: "Sep. 2020"
    },
    {
        author: "岡 大貴, 西田健志",
        title: "ゲーミフィケーションによるコードリーディングの促進",
        url: 'https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=199459&item_no=1&page_id=13&block_id=8',
        publication: "エンタテインメントコンピューティングシンポジウム2019論文集",
        volume: "Vol. 2019",
        pages: "pp. 346--349",
        date: "Sept. 2019"
    },
    {
        author: "井上大雅, 岡 大貴, 大西鮎美, 西田健志, 寺田 努, 塚本昌彦",
        title: "情報技術を活用して誰でも楽しめるスポーツを実現するルール設計プロセス及びその詳細考察",
        url: 'https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=238705&item_no=1&page_id=13&block_id=8',
        publication: "エンタテインメントコンピューティングシンポジウム2024論文集",
        volume: "Vol. 2024",
        pages: "pp. 113--122",
        date: "Aug. 2024"
    },
];

const miscPapers = [
    {
        author: "岡 大貴, 大西鮎美, 西田健志, 寺田 努, 塚本昌彦",
        title: "プログラミング未経験者の意欲向上のための対戦ゲーム「/Shot」の実運用",
        publication: "ユビキタス・ウェアラブルワークショップ2024論文集",
        volume: "Vol.2024",
        pages: "p. 35",
        date: "Dec. 2024"
    },
    {
        author: "岡 大貴, 大西鮎美, 西田健志, 寺田 努, 塚本昌彦",
        title: "プログラミング未経験者の興味喚起を目的としたタップ式プログラミングゲームの提案",
        publication: "ユビキタス・ウェアラブルワークショップ2023論文集",
        volume: "Vol.2023",
        pages: "p. 7",
        date: "Dec. 2023"
    },
    {
        author: "岡 大貴, 大西鮎美, 寺田 努, 塚本昌彦",
        title: "プログラミング演習授業のためのつまずき検出システムの実運用",
        publication: "ユビキタス・ウェアラブルワークショップ2022論文集",
        volume: "Vol.2022",
        pages: "p.20",
        date: "Dec. 2022"
    },
    {
        author: "岡 大貴, 大西鮎美, 寺田 努, 塚本昌彦",
        title: "マルチモーダル情報を用いたプログラミング時のつまずき検出手法の検討",
        publication: "ユビキタス・ウェアラブルワークショップ2021論文集",
        volume: "Vol.2021",
        pages: "p.36",
        date: "Dec. 2021"
    },
    {
        author: "岡 大貴, 西田健志",
        title: "エンターテイメントを用いたコードリーディング促進手法の提案",
        publication: "ユビキタス・ウェアラブルワークショップ2019論文集",
        pages: "p.59",
        date: "Dec. 2019"
    },
    {
        author: "岡 大貴, 寺田 努, 塚本昌彦",
        title: "プロジェクションマッピングによる読書体験の拡張",
        publication: "ユビキタス・ウェアラブルワークショップ2018論文集",
        pages: "p.26",
        date: "Dec. 2018"
    },
];

const linkClass = 'text-blue-600 dark:text-blue-500 hover:underline';
const ResearchPaper = ({ paper }) => (
  <li className='research-paper'>
    {paper.author},
     {paper.url ? (<Link href={paper.url} className={linkClass}>{paper.title}</Link>) : (paper.title)},
    {paper.publication},
    {paper.volume},
    {paper.number},
    {paper.pages}
    ({paper.date}).
  </li>
);

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className='px-6 pt-8'>
        <h1 className='text-2xl font-bold'>岡 大貴</h1>
        <img
          className='mx-2'
          width="360"
          height="320"
          src="/images/oka_2.png"
          alt={name}
        />

        <div className='grid grid-flow-col auto-cols-max m-2'>
        <Link href="https://www.instagram.com/hir0ki_0ka?igsh=MTB1YmR1ZmhnMnRjdQ%3D%3D&utm_source=qr" className='p-1'>
          <img
            src="/images/square-instagram.svg"
            width={30}
            height={30}
          /> 
        </Link>
        <Link href="https://github.com/HirokiOka" className='p-1'>
          <img
            src="/images/square-github.svg"
            width={30}
            height={30}
          /> 
        </Link>
        </div>

        <p className='text-lg mx-4'>プログラミング初学者を対象とした支援システムの研究に取り組んでおり，初学者が楽しみながらプログラミングに取り組める環境作りを目指しています．<br/>主にNode.jsやReactを用いたWebアプリケーションの開発や，openFrameworksやRaspberry Piなどを使ったインタラクティブシステムの開発を行っています．エンターテインメント関連の技術に強い関心があり，特にプログラムを使った創作・表現に興味があります．博士 (工学)．</p>

          <p className='mx-4 text-lg'><span className="font-bold">プログラミング言語</span>: JavaScript/TypeScript, Python, Processing (Java), openFrameworks (C++)</p>
          <p className='mx-4 text-lg mt-2'><span className="font-bold">E-mail</span>: hirokioka.dev [at] gmail.com</p>

          <h3 className='text-xl font-bold pt-4'>略歴</h3>
          <div className='text-base mx-4'>
            <p>Nov. 2024 - current: 神戸大学工学研究科 研究員</p>
            <p>Sept. 2024: 神戸大学工学研究科電気電子工学専攻 博士課程後期課程修了</p>
            <p>Mar. 2021: 神戸大学大学院国際文化学研究科 博士課程前期課程修了</p>
            <p>Mar. 2019: 神戸大学工学部電気電子工学科卒業</p>
          </div>


          <h3 className='text-xl font-bold pt-4'>発表文献</h3>

          <h3 className='text-lg font-bold mx-4'>論文誌</h3>
          <ol className='list-decimal list-inside text-base mx-8'>
            <li><span className='underline'>H. Oka</span>, A. Ohnishi, T. Terada, M. Tsukamoto: <Link href="https://www.mdpi.com/1424-8220/23/12/5739" className={linkClass}>System for Detecting Learner Stuck in Programming Learning</Link>, <span className='italic'>Sensors</span>, Vol. 23, No. 12, pp. 1-2 (June 2023).</li>
            <li><span className='underline'>H. Oka</span>, A. Ohnishi, T. Terada, M. Tsukamoto:<Link href="https://ieeexplore.ieee.org/document/10637432" className={linkClass}>A Choice-based Programming Learning Method to Develop Problem-Solving Skills</Link>, <span className='italic'>IEEE Access</span>, Vol. 12, pp. 119550 -- 119562 (Aug. 2024)</li>
          </ol>

          <h3 className='text-lg font-bold mx-4 mt-2'>国際会議</h3>
          <ol className='list-decimal list-inside text-base mx-8'>
            <li><span className='underline'>H. Oka</span>, A. Ohnishi, T. Terada, M. Tsukamoto: <Link href="https://dl.acm.org/doi/abs/10.1007/978-3-031-20436-4_16" className={linkClass}>A Stumble Detection Method for Programming with Multi-modal Information</Link>, <span className='italic'>Proc. of 20th International Conference on Advances in Mobile Computing and Multimedia Intelligence (MoMM2022)</span>, pp. 169--174 (Nov. 2022).</li>
            <li><span className='underline'>H. Oka</span>, A. Ohnishi, T. Terada, M. Tsukamoto: Competitive Programming Game to Promote Programming Motivation for Non-Programmers by Highlighting Programmer Coolness, <span className='italic'>Proc. of 18th International Workshop on Informatics (IWIN2024)</span>, to appear (2024).</li>
          </ol>

          <h3 className='text-lg font-bold mx-4 mt-2'>国内会議 (査読あり)</h3>
          <ol className='list-decimal list-inside text-base mx-8'>
            {reviewPapers.map((paper, index) => (
                <ResearchPaper key={index} paper={paper} />
            ))}
          </ol>

          <h3 className='text-lg font-bold mx-4 mt-2'>国内会議 (査読なし)</h3>
          <ol className='list-decimal list-inside text-base mx-8'>
            {researchPapers.map((paper, index) => (
                <ResearchPaper key={index} paper={paper} />
            ))}
          </ol>

        <h3 className='text-lg font-bold mx-4 mt-2'>Misc</h3>
        <ol className='list-decimal list-inside text-base mx-8'>
          {miscPapers.map((paper, index) => (
              <ResearchPaper key={index} paper={paper} />
          ))}
        </ol>

        <h3 className='text-xl font-bold pt-4'>受賞・予算獲得等</h3>
        <ul className='list-disc list-inside mx-8 text-base'>
          <li><span className='italic'>IWIN2024</span> Best Presentation Award</li>
          <li>令和5年度日本学生支援機構奨学金 特に優れた業績による返還免除</li>
          <li>令和4年度神戸大学博士学生フェロー</li>
          <li className={linkClass}><a href='https://hacku.yahoo.co.jp/hacku2021online2/'>Yahoo!JAPAN ハッカソン Open Hack U 2021 Online Vol.2 優秀賞 (つぶやき書店)</a></li>
          <li>令和2年度日本学生支援機構奨学金 特に優れた業績による返還免除</li>
        </ul>
          
    </div>
    </Layout>
  )
}
