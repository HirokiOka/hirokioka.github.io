import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/utils.module.css'
import dynamic from 'next/dynamic'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>HirokiOka Web.</h1>
      <SketchComponent />
    </Layout>
  );
}

const Sketch = dynamic(import('react-p5'), {
  loading: () => <></>,
  ssr: false
});

export const SketchComponent = () =>  {
  const width = 840;
  const height = 480;
  const distance = 60;
  const offset = 20;
  let digitFont;
  let backgroundColor = 0;
  let num;
  let values;

  const preload = (p5) => {
    digitFont = p5.loadFont('https://stat.neort.io/externalResource/bqj6tps3p9f48fkipv9g.ttf');
    
  };
  
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(width, height).parent(canvasParentRef);
    p5.noStroke();
    p5.textAlign(p5.CENTER, p5.CENTER);
    p5.rectMode(p5.CENTER);
    num = (width / distance) * (height / distance)
    values = [...Array(num).keys()]
  };

  const draw = (p5) => {
    let fc = p5.frameCount;
    p5.textFont(digitFont);
    backgroundColor = p5.sin(fc * 0.004) * 255;
    p5.background(backgroundColor);
    p5.fill(255 - backgroundColor);
    let y = 0;
    values.forEach((i, _v) => {
      const x = (i * distance) % width;
      const val = Math.floor(fc  * 0.04 * p5.noise(x, y) % 10);
      p5.textSize(Math.abs(Math.sin(fc * (x + y) * 0.00002)) * 30);
      p5.text(val, x + offset, y + offset);
      if (++i % 10 === 0) y += distance;
    });
    p5.fill(backgroundColor);
    p5.rect(width/2, height/2, 620, height/4);
    p5.textSize(64);
    p5.fill(255 - backgroundColor);
    p5.text("HELLO,  WORLD", width/2, height/2);
  };

  return <Sketch preload={preload} setup={setup} draw={draw} />;
}


