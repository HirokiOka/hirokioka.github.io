import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, {siteTitle, name} from '../components/layout'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className='p-6'>
        <h1 className='text-2xl font-bold'>岡 大貴</h1>
        <Image
          className='mx-2'
          width="360"
          height="320"
          src="/images/profile.png"
          unoptimized={true}
          alt={name}
        />

        <div className='grid grid-flow-col auto-cols-max m-2'>
        <Link href="https://twitter.com/unacceptablee2" className='p-1'>
          <Image
            src="/images/square-twitter.svg"
            unoptimized={true}
            width={30}
            height={30}
          /> 
        </Link>
        <Link href="https://github.com/HirokiOka" className='p-1'>
          <Image
            src="/images/square-github.svg"
            unoptimized={true}
            width={30}
            height={30}
          /> 
        </Link>
        </div>

        <h1 className='text-xl font-bold'>研究内容</h1>
        <p className='text-lg m-2'>HCI分野で,プログラミングをより楽しくするための研究をしています．</p>

          <h3 className='text-xl font-bold'>略歴</h3>
          <div className='text-base pb-3 m-2'>
            <p>Apr. 2021 - Current: 神戸大学工学研究科電気電子工学専攻博士課程後期課程在学</p>
            <p>Mar. 2021: 神戸大学大学院国際文化学研究科博士課程前期課程修了</p>
            <p>Mar. 2019: 神戸大学工学部電気電子工学科卒業</p>
          </div>


          <h3 className='text-xl font-bold'>発表文献</h3>

          <h3 className='text-lg font-bold my-2'>論文誌</h3>
          <ol className='list-decimal list-inside text-base m-2'>
            <li><span className='underline'>H. Oka</span>, A. Ohnishi, T. Terada, M. Tsukamoto: System for Detecting Learner Stuck in Programming Learning, <span className='italic'>Sensors</span>, Vol. 23, No. 12, pp. 5739 (June 2023).</li>
          </ol>

          <h3 className='text-lg font-bold my-2'>国際会議</h3>
          <ol className='list-decimal list-inside text-base m-2'>
            <li><span className='underline'>H. Oka</span>, A. Ohnishi, T. Terada, M. Tsukamoto: A Stumble Detection Method for Programming with Multi-modal Information, In International Conference on Advances in Mobile Computing and Multimedia Intelligence (MoMM2022), pp. 169–174 (Nov. 2022).</li>
          </ol>

            <h3 className='text-lg font-bold my-2'>国内会議</h3>
            <ol className='list-decimal list-inside m-2 text-base'>
              <li><span className='underline'>岡 大貴</span>, 寺田 努, 塚本昌彦: プロジェクションマッピングによる読書体験の拡張, ユビキタス・ウェアラブルワークショップ2018論文集, p.26 (Dec. 2018).</li>
              <li><span className='underline'>岡 大貴</span>, 西田健志: ゲーミフィケーションによるコードリーディングの促進, エンタテインメントコンピューティングシンポジウム2019論文集, vol. 2019, pp. 346--349 (Sept.2019).</li>
              <li><span className='underline'>岡 大貴</span>, 西田健志: エンターテイメントを用いたコードリーディング促進手法の提案, ユビキタス・ウェアラブルワークショップ2019論文集, p.59 (Dec.2019).</li>
              <li><span className='underline'>岡 大貴</span>, 西田健志: 競技性・観戦性を拡張したプログラミングゲームの提案, エンタテインメントコンピューティングシンポジウム2020論文集, Vol. 2020, pp.166--169 (Sep. 2020).</li>
              <li><span className='underline'>岡 大貴</span>, 大西鮎美, 寺田 努, 塚本昌彦: マルチモーダル情報を用いたプログラミング時のつまずき検出手法の検討, ユビキタス・ウェアラブルワークショップ2021論文集, Vol.2021, p.36 (Dec. 2021).</li>
              <li><span className='underline'>岡 大貴</span>, 大西鮎美，寺田 努, 塚本昌彦: マルチモーダル情報を用いたプログラミング時のつまずき検出手法の提案, 研究報告ヒューマンコンピュータインタラクション (HCI), Vol. 2022, No. 9, pp. 1–7
(Mar. 2022).</li>
            <li><span className='underline'>岡 大貴</span>, 大西鮎美, 寺田 努, 塚本昌彦: プログラミング演習授業のためのつまずき検出システムの実運用, ユビキタス・ウェアラブルワークショップ2022論文集, Vol.2022, p.20 (Dec. 2022).</li>
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
