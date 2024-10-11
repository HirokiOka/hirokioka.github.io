import Head from 'next/head';
import Layout, { siteTitle, name } from '../../components/layout';


export default function ProgTouch() {
  const imgUrl = "/images/ProgTouch_img.png";
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    <div className="m-2 p-4 md:px-20">

    <div className="flex flex-col md:flex-row items-center md:items-start">
       <div className="md:w-1/2 w-full p-4">
        <h1 className="font-bold md:pt-6 md:text-3xl sm:text-xl">ProgTouch</h1>
        <p className="md:text-base md:mx-8 sm:text-sm sm:m-1">
プログラミング学習が一般的となった昨今では，さまざまな場面でプログラミング教育が実践されている.しかし，初学者にとってプログラミング学習はつまずきの連続である.特にプログラムを使った課題解決の方針を考えることや，その方針をプログラムコードを書いて実装するのが難しいことが学習障壁となり，試行錯誤が容易でないことが問題である．そこで本論文では，プログラミングを「課題の解決方針を立案すること」と「解決方針をコーディングすること」に分離し，前者のみに専念させることで高速な試行錯誤を可能にし，課題の解決方針を立てる能力を高める学習システムを提案する．提案システムを，スマートフォンからの利用を想定した Web アプリケーションとして実装し，ユーザが利用することでプログラム課題に取り組む際にどのような効果が得られるかを評価した．大学のプログラミング入門講義でシステムを運用した結果，システム使用率の高いユーザほどプログラム課題のスコアが高く，記述プログラム量が増えるという効果が得られた．
    </p>
        <ul className="font-bold md:text-base md:mx-8 sm:m-1">発表文献：
          <li>H. Oka, A. Ohnishi, T. Terada, M. Tsukamoto:A Choice-based Programming Learning Method to Develop Problem-Solving Skills, IEEE Access, Vol. 12, pp. 119550 -- 119562 (Aug. 2024)
          </li>
          <li>岡 大貴, 大西鮎美, 西田健志, 寺田 努, 塚本昌彦,プログラミング初学者の課題解決方針の立案能力を高める選択肢タップ式学習支援システム,WISS2023,Vol.2023,No. 100,pp. 34--40(Nov. 2023).
          </li>
          <li>岡 大貴, 大西鮎美, 西田健志, 寺田 努, 塚本昌彦,プログラミング初学者の課題解決方針立案能力の向上に焦点をあてた選択肢タップ式学習システム,情報処理学会研究報告コンピュータと教育 (CE),Vol.2023-CE-171,No. 14,pp. 1--7(Oct. 2023)</li>
        </ul>
      </div>

        <div className="md:w-1/2 w-full p-4">
          <img
            src={imgUrl}
            width={480}
            height={480}
            className="w-1/2 h-auto rounded-lg shadow-lg"
          />
        </div>

      </div>
    </div>

    </Layout>
  );
}
