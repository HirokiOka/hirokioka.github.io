import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import dynamic from 'next/dynamic'

export default function Home() {
  return (
    <div className='bg-black text-white'>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <SketchComponent className=''/>
      </Layout>
    </div>
  );
}

const Sketch = dynamic(import('react-p5'), {
  loading: () => <></>,
  ssr: false
});

export const SketchComponent = () =>  {
  let width;
  let height;
  const distance = 60;
  const offset = 20;
  let digitFont;
  let backgroundColor = 0;
  const maxDigitSize = 36;
  const messageSize = 64;
  const messageWidth = 600;

  const preload = (p5) => {
    digitFont = p5.loadFont('https://stat.neort.io/externalResource/bqj6tps3p9f48fkipv9g.ttf');
  };
  
  const setup = (p5, canvasParentRef) => {
    //width = p5.windowWidth*2/3;
    width = p5.windowWidth;
    //height = p5.windowHeight*2/3;
    height = p5.windowHeight;
    p5.createCanvas(width, height).parent(canvasParentRef);
    p5.noStroke();
    p5.textAlign(p5.CENTER, p5.CENTER);
    p5.rectMode(p5.CENTER);
  };

  const windowResized = (p5) => {
    width = p5.windowWidth;
    height = p5.windowHeight;
    p5.resizeCanvas(width, height);
  };

  const draw = (p5) => {
    let fc = p5.frameCount;
    p5.textFont(digitFont);
    backgroundColor = p5.sin(fc * 0.004) * 255;
    p5.background(backgroundColor);
    p5.fill(255 - backgroundColor);

    for (let j = offset; j < height - offset; j+=distance) {
      for (let i = offset; i < width - offset; i+=distance) {
        const x = i;
        const y = j;
        const digitSize = Math.abs(Math.sin(fc * (i + j) * 0.00002)) * maxDigitSize;
        const digit = Math.floor(fc * p5.noise(i, j) * 0.02 % 10);
        p5.textSize(digitSize);
        p5.text(digit, x, y);
      }
    }
    p5.fill(backgroundColor);
    p5.rect(width/2, height/2, messageWidth + offset, messageSize + offset);
    p5.textSize(64);
    p5.fill(255 - backgroundColor);
    p5.text("HELLO   WORLD.", width/2, height/2);
  };

  return <Sketch preload={preload} setup={setup} draw={draw} windowResized={windowResized}/>;
}


