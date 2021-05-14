import Head from 'next/head'
import styles from '../components/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Layout, {siteTitle, name} from '../components/layout'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h1>Hiroki Oka</h1>
        <img
          src="/images/profile.png"
          className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
          alt={name}
        />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
        <p>I'm researching about programming education and programming experience(PX) in Human-Computer Interaction fields. I love programming. I also love reading books and jazz too!
        </p>
        </section>
          <h3>Keywords</h3>
          <ul>
            <li>Programming Education</li>
            <li>Computer Engineering</li>
            <li>Ubiquitous Computing</li>
            <li>Wearable Computing</li>
            <li>Human-Computer Interaction</li>
            <li>Entertainment Computing </li>
          </ul>
          <h3>Biography</h3>
            <p>Apr.2021 - Current : Ph.D.Student at Faculty of Engineering, Kobe University</p>
            <p>Apr.2019 - Mar.2021 : Master Student at Faculty of Intercultural Studies, Kobe University</p>
            <p>Apr.2014 - Mar.2019 : Bachelor Student at Graduate School of Engineering, Kobe University</p>

          <h3>Publications</h3>
            <ol>
              <li>岡 大貴, 寺田努, 塚本昌彦, プロジェクションマッピングによる読書体験の拡張, ユビキタス・ウェアラブルワークショップ2018論文集, p.26 (Dec. 2018).</li>
                <li>岡 大貴, 西田健志: ゲーミフィケーションによるコードリーディングの促進, エンタテインメントコンピューティングシンポジウム2019論文集, vol. 2019, pp. 346-349(Sept.2019).</li>
                  <li>岡 大貴, 西田健志: エンターテイメントを用いたコードリーディング促進手法の提案, ユビキタス・ウェアラブルワークショップ2019論文集, p.59(Dec.2019).</li>
                    <li>岡 大貴, 西田健志: 競技性・観戦性を拡張したプログラミングゲームの提案, エンタテインメントコンピューティングシンポジウム2020 論文集, Vol. 2020, pp.166–169(Sep. 2020).</li>
            </ol>
    </Layout>
  )
}
