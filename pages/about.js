import Head from 'next/head'
import Link from 'next/link'
//import Image from 'next/image'
import Layout, {siteTitle, name} from '../components/layout'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className='p-6'>
        <h1 className='text-2xl font-bold'>岡 大貴</h1>
        <img
          className='mx-2'
          width="360"
          height="320"
          src="/images/profile.png"
          alt={name}
        />

        <div className='grid grid-flow-col auto-cols-max m-2'>
        <Link href="https://twitter.com/unacceptablee2" className='p-1'>
          <img
            src="/images/square-twitter.svg"
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

        <h1 className='text-xl font-bold'>研究内容</h1>
        <p className='text-lg m-2'>HCI分野で，プログラミングをより楽しくするための研究をしています．</p>

          <h3 className='text-xl font-bold'>略歴</h3>
          <div className='text-base pb-3 m-2'>
            <p>Apr. 2021 - Current: 神戸大学工学研究科電気電子工学専攻博士課程後期課程在学</p>
            <p>Mar. 2021: 神戸大学大学院国際文化学研究科博士課程前期課程修了</p>
            <p>Mar. 2019: 神戸大学工学部電気電子工学科卒業</p>
          </div>


          <h3 className='text-xl font-bold'>発表文献</h3>

          <h3 className='text-lg font-bold my-2'>論文誌</h3>
          <ol className='list-decimal list-inside text-base m-2'>
            <li><span className='underline'>H. Oka</span>, A. Ohnishi, T. Terada, M. Tsukamoto: <Link href="https://www.mdpi.com/1424-8220/23/12/5739" className="text-blue-600 dark:text-blue-500 hover:underline">System for Detecting Learner Stuck in Programming Learning</Link>, <span className='italic'>Sensors</span>, Vol. 23, No. 12, pp. 1-2 (June 2023).</li>
          </ol>

          <h3 className='text-lg font-bold my-2'>国際会議</h3>
          <ol className='list-decimal list-inside text-base m-2'>
            <li><span className='underline'>H. Oka</span>, A. Ohnishi, T. Terada, M. Tsukamoto: <Link href="https://dl.acm.org/doi/abs/10.1007/978-3-031-20436-4_16" className="text-blue-600 dark:text-blue-500 hover:underline">A Stumble Detection Method for Programming with Multi-modal Information</Link>, <span className='italic'>Proc. of 20th International Conference on Advances in Mobile Computing and Multimedia Intelligence (MoMM2022)</span>, pp. 169--174 (Nov. 2022).</li>
          </ol>

            <h3 className='text-lg font-bold my-2'>国内会議</h3>
            <ol className='list-decimal list-inside m-2 text-base'>
              <li><span className='underline'>岡 大貴</span>, 寺田 努, 塚本昌彦: プロジェクションマッピングによる読書体験の拡張, ユビキタス・ウェアラブルワークショップ2018論文集, p.26 (Dec. 2018).</li>
              <li><span className='underline'>岡 大貴</span>, 西田健志: ゲーミフィケーションによるコードリーディングの促進, エンタテインメントコンピューティングシンポジウム2019論文集, vol. 2019, pp. 346--349 (Sept.2019).</li>
              <li><span className='underline'>岡 大貴</span>, 西田健志: エンターテイメントを用いたコードリーディング促進手法の提案, ユビキタス・ウェアラブルワークショップ2019論文集, p.59 (Dec.2019).</li>
              <li><span className='underline'>岡 大貴</span>, 西田健志: 競技性・観戦性を拡張したプログラミングゲームの提案, エンタテインメントコンピューティングシンポジウム2020論文集, Vol. 2020, pp.166--169 (Sep. 2020).</li>
              <li><span className='underline'>岡 大貴</span>, 大西鮎美, 寺田 努, 塚本昌彦: マルチモーダル情報を用いたプログラミング時のつまずき検出手法の検討, ユビキタス・ウェアラブルワークショップ2021論文集, Vol.2021, p.36 (Dec. 2021).</li>
              <li><span className='underline'>岡 大貴</span>, 大西鮎美，寺田 努, 塚本昌彦: マルチモーダル情報を用いたプログラミング時のつまずき検出手法の提案, 情報処理学会研究報告ヒューマンコンピュータインタラクション (HCI), Vol. 2022-HCI-197, No. 9, pp. 1–7
(Mar. 2022).</li>
            <li><span className='underline'>岡 大貴</span>, 大西鮎美, 寺田 努, 塚本昌彦: プログラミング演習授業のためのつまずき検出システムの実運用, ユビキタス・ウェアラブルワークショップ2022論文集, Vol.2022, p.20 (Dec. 2022).</li>
            <li><span className='underline'>岡 大貴</span>, 大西鮎美, 西田健志, 寺田 努, 塚本昌彦: プログラミング初学者の課題解決方針立案能力の向上に焦点をあてた選択肢タップ式学習システム, 情報処理学会研究報告コンピュータと教育 (CE), Vol.2023-CE-171, No. 14, pp. 1--7 (Oct. 2023).</li>
            <li><span className='underline'>岡 大貴</span>, 大西鮎美, 西田健志, 寺田 努, 塚本昌彦: <Link href="https://www.wiss.org/WISS2023Proceedings/data/05.pdf" className="text-blue-600 dark:text-blue-500 hover:underline">プログラミング初学者の課題解決方針の立案能力を高める選択肢タップ式学習支援システム</Link>, WISS2023, Vol.2023, No. 100, pp. 34--40 (Nov. 2023).</li>
            <li><span className='underline'>岡 大貴</span>, 大西鮎美, 西田健志, 寺田 努, 塚本昌彦: プログラミング未経験者の興味喚起を目的としたタップ式プログラミングゲームの提案, ユビキタス・ウェアラブルワークショップ2023論文集, Vol.2023,  p. 7 (Dec. 2023).</li>
          </ol>
        <h3 className='text-xl font-bold pt-3'>受賞・予算獲得等</h3>
        <ul className='list-disc list-inside mx-3 text-base'>
          <li>令和４年度神戸大学博士学生フェロー</li>
          <li>Yahoo!JAPAN ハッカソン Open Hack U 2021 Online Vol.2 優秀賞
</li>
        </ul>
          
    </div>
    </Layout>
  )
}
